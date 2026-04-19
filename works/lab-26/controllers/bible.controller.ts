import { Request, Response } from "express";
import path from "path";

const viewsDirectory = path.join(__dirname, "..", "views");
const baseUrl = "https://bible-api.deno.dev/api/read/rv1960";

const renderBible = (res: Response, payload: any = {}) => {
  const fileName = path.join(viewsDirectory, "bible.pug");
  return res.render(fileName, payload);
};

export const bibleGet = (_req: Request, res: Response) => {
  return renderBible(res, { query: { book: "", chapter: "", verse: "" } });
};

export const biblePost = async (req: Request, res: Response) => {
  const book = String(req.body.book ?? "").trim();
  const chapter = String(req.body.chapter ?? "").trim();
  const verse = String(req.body.verse ?? "").trim();

  const query = {
    book,
    chapter,
    verse,
  };

  if (!book || !chapter) {
    return renderBible(res.status(400), {
      query,
      error: "Book and chapter are required.",
    });
  }

  const endpoint = verse
    ? `${baseUrl}/${encodeURIComponent(book)}/${chapter}/${verse}`
    : `${baseUrl}/${encodeURIComponent(book)}/${chapter}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (!response.ok || data?.error) {
      return renderBible(res.status(404), {
        query,
        error: "Book, chapter, or verse not found.",
      });
    }

    const text = data.verse
      ?? data.text
      ?? (Array.isArray(data.verses)
        ? data.verses.map((entry: any) => `${entry.verse}: ${entry.text}`).join("\n")
        : "");

    if (!text) {
      return renderBible(res.status(404), {
        query,
        error: "No verse text was returned for that query.",
      });
    }

    const reference = data.reference ?? `${book} ${chapter}${verse ? `:${verse}` : ""}`;

    return renderBible(res, {
      query,
      result: {
        reference,
        text,
      },
    });
  } catch {
    return renderBible(res.status(500), {
      query,
      error: "An error occurred while fetching the Bible passage.",
    });
  }
};

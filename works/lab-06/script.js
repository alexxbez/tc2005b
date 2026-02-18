const input = document.getElementById("passwordInput")
const output = document.getElementById("output")

function checkForSequential(str) {
  const sequences = ["123", "234", "345", "456", "567", "678", "789",
    "abc", "bcd", "cde", "def", "efg", "fgh", "ghi",
    "qwe", "wer", "ert", "rty", "tyu", "yui", "uio"];
  return sequences.some(seq => str.toLowerCase().includes(seq));
}

function checkForKeyboardPattern(str) {
  const patterns = ["qwerty", "asdfgh", "zxcvbn", "qwertyuiop", "asdfghjkl"];
  return patterns.some(pattern => str.toLowerCase().includes(pattern));
}

function testPassword(pswd) {
  const commonPatterns = ["password", "123456", "qwerty", "admin", "letmein"];
  const hasCommonWord = commonPatterns.some(word =>
    pswd.toLowerCase().includes(word)
  );

  const hasSequential = checkForSequential(pswd)
  const hasKeyboardPattern = checkForKeyboardPattern(pswd)

  const hasSymbols = /[&<\[\]{}()!$#;¿>!:<&.?,&u=^\-+*%|\\`~]/.test(pswd);
  const hasNumbers = /\d/.test(pswd);
  const hasUpperCaseLetter = /[A-Z]/.test(pswd);

  const minimumLength = 8
  const secureLength = 16

  if (pswd.length > secureLength) {
    return { ok: true, msg: "Ok" }
  }
  else if (pswd.length < minimumLength) {
    return { ok: false, msg: "Minimum required length of 8." }
  }
  else if (!hasUpperCaseLetter) {
    return { ok: false, msg: "Must include at least one upper case letter." }
  }
  else if (!hasNumbers) {
    return { ok: false, msg: "Must include at least one number." }
  }
  else if (!hasSymbols) {
    return { ok: false, msg: "Must include at least one special symbol." }
  }
  else if (hasCommonWord || hasSequential || hasKeyboardPattern) {
    return { ok: false, msg: "Just no dude." }
  }
  else {
    return { ok: true, msg: "Ok." }
  }
}

input.addEventListener("input", () => {
  let { ok, msg } = testPassword(input.value)
  if (ok) {
    input.classList.add("text-success")
    input.classList.add("input-success")

    input.classList.remove("text-danger")
    input.classList.remove("input-error")
  } else {
    input.classList.remove("text-success")
    input.classList.remove("input-success")

    input.classList.add("text-danger")
    input.classList.add("input-error")
  }
  output.textContent = msg
})

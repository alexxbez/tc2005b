/* Actrices de “Las brujas de Salem”. */

SELECT nombre
FROM elenco e, actor a
WHERE a.nombre = e.nombre
and a.sexo = 'F'
and e.titulo = 'Las brujas de Salem';

SELECT nombre
FROM elenco
WHERE titulo = 'Las brujas de Salem'
and nombre IN (SELECT nombre
FROM actor WHERE sexo = 'F');

/* Nombres de los actores que aparecen en películas producidas por MGM en 1995. */

SELECT nombre
FROM  pelicula, elenco
WHERE pelicula.titulo = elenco.titulo AND pelicula.año = elenco.año
AND pelicula.nomestudio = 'MGM' AND pelicula.año = 1995;

SELECT nombre
FROM elenco
WHERE elenco.titulo in (SELECT titulo FROM pelicula WHERE nomestudio = 'MGM' and año = 1995);

/* Películas que duran más que “Lo que el viento se llevó” (de 1939). */

SELECT titulo
FROM pelicula
WHERE duracion > (SELECT duracion FROM pelicula WHERE titulo = 'Lo que el viento es llevó' and año = 1939);

/* Productores que han hecho más películas que George Lucas. */

SELECT prod.nombre , COUNT(pel.idProductor) AS noPelis
FROM productores prod, peliculas pel
WHERE prod.idProductor = pel.idProductor
and noPelis > (
    SELECT COUNT(pel.idProcuctor)
    FROM productores prod, peliculas pel
    WHERE prod.idProductor = pel.idProductor AND prod.nombre = 'George Lucas'
    )
GROUP BY prod.nombre;

/* Nombres de los productores de las películas en las que ha aparecido Sharon Stone. */

SELECT productor.nombre
FROM productor INNER JOIN pelicula ON pelicula.idProductor = productor.idProductor
INNER JOIN elenco ON elenco.titulo = pelicula.titulo and elenco.año = pelicula.año
WHERE elenco.nombre = 'Sharon Stone';

SELECT productor.nombre
FROM productor inner join pelicula on productor.idProductor = pelicula.idProductor
WHERE pelicula.titulo = (
    SELECT titulo
    FROM elenco
    WHERE nombre = 'Sharon Stone'
    );

/* Título de las películas que han sido filmadas más de una vez */

SELECT titulo
FROM pelicula
HAVING COUNT(*) > 1
GROUP BY titulo;

SELECT titulo
FROM pelicula
WHERE titulo in (
    SELECT titulo
    FROM pelicula
    HAVING COUNT(*) > 1
    GROUP BY titulo
    );

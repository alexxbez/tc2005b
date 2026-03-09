/* El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado. */
SELECT Pelicula.nombre, SUM(sueldo) as 'Sueldo total'
FROM Elenco
GROUP BY Pelicula.nombre
ORDER BY SUM(sueldo) DESC;

/* El ingreso total recibido por cada actor, sin importar en cuantas películas haya participado. */
SELECT nomestudio, SUM(presupuesto) as 'Monto total'
FROM Pelicula
WHERE año BETWEEN 1980 AND 1989
GROUP BY nomestudio
ORDER BY presupuesto DESC;

/* Nombre y sueldo promedio de los actores (sólo hombres) que reciben en promedio un pago superior a 5 millones de dolares por película. */
SELECT elenco.nombre, AVG(elenco.sueldo) as 'Sueldo promedio'
FROM Elenco INNER JOIN
Actor ON elenco.nombre = Actor.nombre
WHERE Actor.sexo = 'M'
HAVING AVG(elenco.sueldo) > 5000000
ORDER BY AVG(elenco.sueldo) DESC;

/* Título y año de producción de las películas con menor presupuesto. (Por ejemplo, la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto). */
SELECT titulo, año, MIN(presupuesto)
FROM pelicula
GROUP BY titulo;

/* Mostrar el sueldo de la actriz mejor pagada. */
SELECT nombre, AVG(sueldo)
FROM elenco INNER JOIN
Actor ON nombre = Actor.nombre
WHERE Actor.sexo = 'F'
GROUP BY nombre
ORDER BY AVG(sueldo) DESC
LIMIT 1;

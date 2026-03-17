-- Consulta de una tabla completa
SELECT * FROM materiales;

-- Selección
SELECT * FROM materiales
WHERE clave = 1000;

-- Proyección
SELECT clave, rfc, fecha FROM entregan

-- Join natural
SELECT * FROM materiales, entregan
WHERE materiales.clave = entregan.clave;

-- Si algún maeterial no se ha entregado, no aparecerán resultados en la consulta

-- Join con condición específica
SELECT * FROM entregan, proyectos
WHERE entregan.numero <= proyectos.numero;

-- Unión
(SELECT * FROM entregan WHERE clave = 1450)
UNION
(SELECT * FROM entregan WHERE clave = 1300)

-- Se obtendrían dos consultas diferentes, una con la clave de 1450 y otra con 1300

-- Intersección
SELECT clave FROM entregan
WHERE clave = (
  SELECT clave FROM entregan WHERE numero = 5018
) AND numero = 5001;

-- Diferencia
SELECT * FROM entregan 
WHERE clave NOT IN (
  SELECT clave FROM entregan WHERE clave = 1000
);

-- Producto cartesiano
SELECT * FROM entregan, materiales;

-- El número de tuplas se define como el producto de la cantidad de tuplas en ambas tablas

-- Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.
SET dateformat dmy;

SELECT descripcion FROM materiales, entregan 
WHERE materiales.clave = entregan.clave 
AND entregan.fecha > '01/01/00' 
AND entregan.fecha < '31/12/00';

-- Porque un material pudo haber sido entregado varias veces durante el mismo año


-- Agrega la palabra distinct inmediatamente después de la palabra select a la consulta que planteaste antes.
SELECT DISTINCT descripcion FROM materiales, entregan 
WHERE materiales.clave = entregan.clave 
AND entregan.fecha > '01/01/00' 
AND entregan.fecha < '31/12/00';

-- Ahora solo se enlista el material una sola vez

-- Obtén los números y denominaciones de los proyectos con las fechas y cantidades de sus entregas, ordenadas por número de proyecto, presentando las fechas de la más reciente a la más antigua.
SELECT proyectos.numero, denominacion, fecha, cantidad 
FROM proyectos INNER JOIN entregan ON proyectos.numero = entregan.numero
ORDER BY proyectos.numero, entregan.fecha;

-- Cadena
SELECT * FROM productos where Descripcion LIKE 'Si%'

-- Todos los productos cuyas descripciones inician con si. Sin el % solo matchearía la parte del si.

-- La definición de variables y la concatenación de cadenas funciona de manera distinta en mariadb
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? ';

SET @foo = CONCAT(@foo, ' obtienes?');

SELECT CONCAT(@foo, @bar) AS Resultado;

-- Se obtiene '¿Qué resultado obtienes? ¿¿¿???'

-- También existen algunas diferencias en las operaciones para matchear strings

SELECT Numero FROM Entregan WHERE Numero LIKE '___6';

-- Funciona y coincide con los numeros que tienen cuatro dígitos y el último es un 6

SELECT RFC FROM Entregan WHERE RFC REGEXP '^[A-D]';
SELECT RFC FROM Entregan WHERE RFC REGEXP '^[^A]';

-- Funcionan especificando que son una expresión regular ya que el like en mariadb funciona de manera distinta

-- Operadores lógicos
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero BETWEEN 5000 and 5010;

-- Para filtrar usaría otro BETWEEN para filtrar entre el rango de fechas

SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero Between 5000 and 5010 AND
Exists ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC )

-- Esta consulta busca el rfc, cantidad, fecha y numero de la tabla entregan que tienen numeros entre 5000 y 5010 y cuya razón social de los proyectos inican con La

-- Los paréntesis son la manera de encerrar otra subconsulta para poder utilizar sus valores dentro de otra consulta

-- Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador IN
SELECT RFC,Cantidad, Fecha,Numero
FROM Entregan
WHERE Numero BETWEEN 5000 and 5010 AND
entregan.RFC IN ( SELECT RFC
FROM Proveedores
WHERE RazonSocial LIKE 'La%' );

-- Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador NOT IN 
SELECT RFC, Cantidad, Fecha, Numero
FROM Entregan
WHERE Numero BETWEEN 5000 and 5010
AND entregan.RFC NOT IN (
    SELECT RFC
    FROM Proveedores
    WHERE RazonSocial NOT LIKE 'La%'
);

-- Utilizando all
SELECT Clave, Descripción, Costo
FROM Materiales
WHERE Costo > ALL (
    SELECT M.Costo
    FROM Materiales M
    JOIN Entregan E ON M.Clave = E.Clave
    WHERE E.Numero = 1000
);

-- Dentro de mariadb no existe el operador de top, pero se puede sustituir por limit
SELECT * FROM numero FROM proyectos LIMIT 1;

-- Modificar tablas es igual en sql server y mariadb

-- ¿Qué consulta usarías para obtener el importe de las entregas es decir, el total en dinero de lo entregado, basado en la cantidad de la entrega y el precio del material y el impuesto asignado?
SELECT (E.Cantidad * M.Costo * (1 + M.PorcentajeImpuesto)) AS ImporteTotal
FROM Entregan E
JOIN Materiales M ON E.Clave = M.Clave;

-- Comprueba lo anterior, creando vistas para cinco de las consultas que planteaste anteriormente en la práctica . Posteriormente revisa cada vista creada para comprobar que devuelve el mismo resultado.
CREATE VIEW materialesen200 (descripcion) AS
SELECT DISTINCT descripcion FROM materiales, entregan 
WHERE materiales.clave = entregan.clave 
AND entregan.fecha > '01/01/00' 
AND entregan.fecha < '31/12/00';

CREATE VIEW proyectosyentregas (numero, denominacion, fecha, cantidad) AS
SELECT proyectos.numero, denominacion, fecha, cantidad 
FROM proyectos INNER JOIN entregan ON proyectos.numero = entregan.numero

CREATE VIEW productosconsi AS
SELECT * FROM productos where Descripcion LIKE 'Si%'

CREATE VIEW muchoscostos AS
SELECT Clave, Descripción, Costo
FROM Materiales
WHERE Costo > ALL (
    SELECT M.Costo
    FROM Materiales M
    JOIN Entregan E ON M.Clave = E.Clave
    WHERE E.Numero = 1000
);

CREATE VIEW entreceroydiez AS
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero BETWEEN 5000 and 5010;


-- Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".
SELECT materiales.clave, descripcion 
FROM materiales INNER JOIN entregan ON materiales.clave = entregan.clave
INNER JOIN proyectos ON entregan.numero = proyectos.numero
WHERE proyectos.denominacion = 'México sin ti no estamos completos';

-- Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".
SELECT materiales.clave, descripcion 
FROM materiales INNER JOIN entregan ON materiales.clave = entregan.clave
INNER JOIN proveedores ON entregan.numero = proveedores.numero
WHERE proveedores.razonSocial = 'México sin ti no estamos completos';

-- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.
SELECT RFC
FROM Entregan
WHERE YEAR(Fecha) = 2000
GROUP BY RFC
HAVING AVG(Cantidad) >= 300;

-- El Total entregado por cada material en el año 2000.
SELECT descripcion, SUM(cantidad)
FROM entregan 
INNER JOIN materiales ON materiales.clave = entregan.clave
WHERE YEAR(fecha) = 2000
GROUP BY descripcion
ORDER BY SUM(cantidad);

-- La Clave del material más vendido durante el 2001.
SELECT materiales.clave
FROM entregan 
INNER JOIN materiales ON materiales.clave = entregan.clave
WHERE YEAR(fecha) = 2001
GROUP BY materiales.clave
ORDER BY SUM(cantidad) DESC
LIMIT 1;

-- Productos que contienen el patrón 'ub' en su nombre.
SELECT descripcion
FROM materiales
WHERE descripcion LIKE '%ub%';


-- Denominación y suma del total a pagar para todos los proyectos.
SELECT denominacion, SUM(materiales.costo * entregan.cantidad)
FROM proyectos
INNER JOIN entregan ON proyectos.numero = entregan.numero
INNER JOIN materiales ON entregan.clave = materiales.clave
GROUP BY denominacion;

-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).
CREATE VIEW entelevisa AS
SELECT denominacion, rfc, razonSocial 
FROM proyectos INNER JOIN entregan ON proyectos.numero = entregan.numero
INNER JOIN proveedores ON entregan.rfc = proveedores.rfc
WHERE proyectos.descripcion = 'Televisa';

CREATE VIEW encoahuila AS
SELECT denominacion, rfc, razonSocial 
FROM proyectos INNER JOIN entregan ON proyectos.numero = entregan.numero
INNER JOIN proveedores ON entregan.rfc = proveedores.rfc
WHERE proyectos.descripcion = 'Educando en Coahuila';

SELECT * FROM entelevisa 
WHERE (denominacion, rfc, razonSocial) NOT IN (
  SELECT * FROM encoahuila
);


-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).

CREATE VIEW entelevisa AS
SELECT denominacion, rfc, razonSocial 
FROM proyectos INNER JOIN entregan ON proyectos.numero = entregan.numero
INNER JOIN proveedores ON entregan.rfc = proveedores.rfc
WHERE proyectos.descripcion = 'Televisa' 
AND (denominacion, rfc, razonSocial) NOT IN (
  SELECT denominacion, rfc, razonSocial 
  FROM proyectos INNER JOIN entregan ON proyectos.numero = entregan.numero
  INNER JOIN proveedores ON entregan.rfc = proveedores.rfc
  WHERE proyectos.descripcion = 'Educando en Coahuila';
);

-- Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores también suministran materiales al proyecto Educando en Coahuila.
SELECT materiales.descripcion, materiales.costo
FROM materiales
INNER JOIN entregan ON materiales.clave = entregan.clave
INNER JOIN proyectos ON entregan.numero = proyectos.numero
WHERE proyectos.denominacion = 'Televisa'
AND entregan.rfc IN (
    SELECT entregan.rfc
    FROM entregan
    INNER JOIN proyectos ON entregan.numero = proyectos.numero
    WHERE proyectos.denominacion = 'Educando en Coahuila'
);

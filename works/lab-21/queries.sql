-- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.
select
  sum(cantidad) as 'Cantidad',
  sum(cantidad * (precio + impuesto)) as 'Importe total'
from 
  materiales as m 
inner join 
  entregan as e on m.clave = e.clave
and
  fecha between '01/01/1997' and '31/12/1997';

-- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
select 
  razonsocial as 'Razon Social',
  sum(cantidad) as 'Cantidad',
  sum(cantidad * (precio + impuesto)) as 'Importe total'
from 
  proveedores as p 
inner join 
  entregan as e on p.rfc = e.rfc
inner join
  materiales as m on e.clave = m.clave
group by e.razonsocial;

-- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
select 
  clave, 
  descripcion,
  sum(cantidad) as 'Cantidad Total',
  min(cantidad) as 'Cantidad Minima',
  max(cantidad) as 'Cantidad Maxima',
  sum(cantidad * (precio + impuesto)) as 'Importe total'
from 
  materales as m
inner join 
  entregan as e on m.clave = e.clave
having 
  avg(cantidad) > 400;


-- Clave y descripción de los materiales que nunca han sido entregados.



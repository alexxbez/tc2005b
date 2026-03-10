La solución del laboratorio se encuentra dentro del proyecto.

*¿Qué ventajas tiene escribir el código SQL únicamente en la capa del modelo?*

Crea una mejor abstracción y nos ayuda en el _decoupling_, que elimina las dependencias que existen entre las capas de la aplicación. Esto nos permite tener una arquitectura más modular y, si en el futuro, se toma la desición de cambiaar la base de datos, solo la parte del modelo se debe de actualizar, las demás capas se matienen iguales.

*¿Qué es SQL injection y cómo se puede prevenir?*

Es cuando un usuario ingresa códigos de SQL válidos a un servidor, esto por medio de una forma o haciendo una request directa al servidor. Esto es peligroso ya que no podemos saber las intenciones del cliente y por ende no le podemos permitir ejecutar comandos de SQL.

Esto se puede evitar de varias maneras, usualmente con librerías. Por ejemplo, durante la clase se ha estado viendo mysql, cuya librería en JavaScript nos permite protegernos a estos ataques utilizando los símbolos de pregunta `?`. En nuestro proyecto utilizamos un ORM, lo cual nos provee una capa de abstracción extra. Esta capa extra nos protege contra estos ataques.

Este es le link al commit con la implementación: [link](https://github.com/DevSlashRichie/maree-backend/commit/2d11f5c7be2a9ab502de1672ed0dcfda9113388b


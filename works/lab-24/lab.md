El laboratorio fue completado en el proyecto. Debido a que estamos utilizando React, todo el proyecto esta utlizando AJAX.

Commit ejemplo: c76faee8888c31ae4d04e770515d41d130a38797.

*¿Qué importancia tiene AJAX en el desarrollo de RIA's (Rich Internet Applications?*

Permite crear aplicaciones web con una mayor carga interactiva, lo que permite que las paginas respondan de una manera mas personalizada al usuario, especialmente de una manera mas rapida debido a su naturaleza asincrona. De esta manera el usuario no pierde el control de la aplicacion, y se vuelve una aplicacion mas agradable de usar.

*¿Qué implicaciones de seguridad tiene AJAX? ¿Dónde se deben hacer las validaciones de seguridad, del lado del cliente o del lado del servidor?*

Es buena idea hacer validacion dentro del lado del cliente, pero como se ha visto en laboratorios anteriores, todas las validaciones deben de estar del lado del servidor. Es buena idea validar dentro del front-end, sin embargo estas validaciones no remplazan a las validaciones oficiales dentro dle back-end, ya que es posible saltarselas y simplemente hacer peticiones directas sin pasar por la capa de AJAX.

*¿Qué es JSON?*

Significa JavaScript Object Notation, y es la manera mas comun en la que se transmite informacion en la web. Este es simplemente un archivo de texto que sigue la estructura de los objetos en JavaScript, la cual es utilizada para transmitir informacion y existen ya muchas librerias en varios lenguajes para parsear esta notacion. 

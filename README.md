API TRAVEL
Ejercicio correspondiente al Workshop Integrador del Sprint Nº 3 de la carrera Desarrollador Web Full Stack dictado por ACAMICA 

Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Mira Deployment para conocer como desplegar el proyecto.

Pre-requisitos 📋
Editor de Código (Visual Studio Code o similar)
NodeJS
Express
XAMPP
MySQL
Workbench
Postman

Instalación 🔧

Paso 1: 
Crea una carpeta local para albergar el repositorio

Paso 2:
Posicionate en la carpeta creada y clona el repositorio:
  git clone https://github.com/hmfarias/API-Travel.git

Con esto, tendras creada la estructura de archivos y el contenido del BackEnd de la aplicación.  

PAso 3:
Ejecuta XAMPP y activa el Servidor MySQL. Luego ingresa a Workbench
    
Paso 4: 
En Workbench crea un Schena con el nombre "travel"

Paso 5: 
En Workbench ir al menu: FILE > Open SQL Script y en la ventana de selección de archivo, navega dentro de la carpeta local que creaste, hasta la carpeta "./travel-server / scriptsSQL-postman". 
Dentro de esa carpeta elije el archivo "Create Travel Tables.sql". 
Ejecuta ese script en Workbench. Con esto tendrás creadas las tablas necesarias para utilizar en la API (siempre dentro del schema "travel".

Paso 6:
En Workbench ir al menu: FILE > Open SQL Script y en la ventana de selección de archivo, navega hasta la carpeta "./travel-server / scriptsSQL-postman". 
Dentro de esa carpeta elije el archivo "Inserts in travel tables.sql". 
Ejecuta ese script en Workbench. Con esto tendrás datos de prueba en las tablas creadas.

Paso 7:
Ingresa a tu editor de Código (Visual Studio Code o similar).
Abre una ventana de terminal y posicionate en la carpeta local que creaste y dentro de ésta en la carpeta "travel-server". 
Escribe npm install. Con eso tendras instaladas todas las Dependencias necesarias

Paso 8:
Ejecuta node server.js o bien nodemon server.js. Esto levantará el servidor y podrás verificar en la pantalla de la terminal, que se ha conectado a la Base "travel".

Paso 9: 
Ingresa a Postman y ve al menu y selecciona ARCHIVO / IMPORTAR y da click en el botón "Cargar Archivo:.
Navega dentro de la carpeta local que creaste, e ingresa a la carpeta "./travel-server / scriptsSQL-postman" y selecciona el archivo "API Travel.postman_collection.json""
Esto creará una colección en Postman con el nombre API Travel, en donde podrás encontrar distintos Requests para probar la API.


Ejecutando las pruebas ⚙️

En primer lugar deberás ejecutar el Request de LOGIN, ya que deberás obtener el JWT en la respuesta, para pegarlo después en cada request que utilices.

Podrás utilizar las distintas Requests creadas en Postman, para:
Hacer LOGIN (necesario para ejecutar el resto)
Traer todos los PAQUETES
Traer todos los USUARIOS
Traer todas las COMPRAS
Traer una COMPRA por ID
Traer un USUARIO por ID
Traer un PAQUETE por ID
Agregar un PAQUETE
Agregar una COMPRA
Agregar un USUARIO
Actualizar un PAQUETE
Actualizar una COMPRA
Eliminar una COMPRA (solo con fines didácticos, pues no es recomendable hacer delete en una API en produccuón)
Eliminar un PAQUETE (solo con fines didácticos, pues no es recomendable hacer delete en una API en produccuón)


Construido con 🛠️
JavaScript
NodeJS
Express
Sequelize
MySQL


Autores ✒️
Marcelo Farias

Gracias a nuestro Squad Lead Dany Javier Bautista Montaña, por su dirección y colaboración en el proyecto. 🎁

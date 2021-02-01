# Albergue Bañaderos 🚀
_Recreación de la página web del albergue de bañaderos utilizando React. Esto lo hago para empezar a poner en práctica los conocimientos que vaya adquiriendo de React y así mejorar y ver cómo funciona esta librería._

_La web original es la siguiente https://www.albergueanimalesgrancanaria.com/ y todos los derechos de autor y propiedad son suyos._

_Este repositorio es únicamente con fines educativos._

_Mira Despliegue para conocer como desplegar el proyecto_

### Pre-requisitos 📋

_Para instalar el repositorio necesitamos tener algún software previo, acontinución os dejaré los links necesarios para descargar cada uno y el comando necesario para iniciarlo una vez lo tengamos descargado._ 

```
**npm***: npm es el Node Package Manager que viene incluido y ayuda a cada desarrollo asociado a Node. Para instalarlo 
debemos descargar el propio node.js en el siguiente link.

https://nodejs.org/en/

```

Eso como lo básico para poder ejecutar el backend, además, yo para la base de datos utilizado MySQL a través de XAMP que dejaré el método de instalación aquí y al ser en modo gráfico no requiere ningún comando para iniciarlo.

```
https://www.apachefriends.org/es/index.html
```

### Despliegue 📦

_Para hacer el deploy debemos tener en cuenta dos cosas, la primera es que el front y el back se ejecutan por separado, en mi caso, uso dos terminales, desconozco si se puede hacer en la misma; lo segundo, que hay que tener la base de datos creada anteriormente para que se pueden crear las tablas._

_Vamos a empezar con la base de datos, para ello, abrimos Xampp Control Panel, buscamos la casilla de MySQL debajo de Apache y le damos a Start. Seguidamente le damos a Shell, se encuentra a la derecha del panel de control. Aquí añadimos las credenciales, yo tengo las predetermiandas, si usas unas personalizadas, recuerda cambiar esas información del archivo app/config/db.config.js._

_Una vez estemos en la terminal, realizamos los siguientes comandos:_

```
mysql -u root -p
create database animals;
use animals;
```

_Nos cambiamos a la terminal de nuestro editor de texto a la del propio Windows y ejecutamos:_

```
node server.js
```

_Con esto ejecutamos el back y creamos las tablas correspondientes en nuestra base de datos, los datos hay que insertarlos manualmente ya que en la web no hay opción para ello._

_Por otro lado, saltamos al front, para ello debemos realizar estos dos comandos que una vez hechos nos abrirán una ventana de navegador con el proyecto ya ejecutándose._

```
npm install
npm start
```



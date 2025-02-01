# Proyecto de Sistema de Librería

Este proyecto es una aplicación web que permite gestionar una librería. A continuación, se describen los pasos necesarios para configurar y ejecutar el proyecto en tu entorno local.

## Pre-requisitos

Antes de comenzar a utilizar este proyecto, asegúrate de tener instalado lo siguiente:

*   **Docker:** Para la creación del contenedor de PostgreSQL.
*   **Node.js y npm:** Para ejecutar la aplicación y sus scripts.

## Pasos Previos a la Ejecución

Antes de poder utilizar el proyecto, debes seguir estos pasos para preparar tu entorno:

1.  **Copia el Archivo de Entorno `.env_sample`**
    
    La aplicación utiliza un archivo `.env` para configurar variables de entorno (como credenciales de la base de datos, puertos, etc.). Antes de continuar, debes copiar el archivo `.env_sample` a un nuevo archivo llamado `.env`:
    
    ```
    cp .env_sample .env
    ```
    
    Una vez copiado, abre el archivo `.env` y modifica los valores según tu configuración. Los valores de este archivo serán utilizados por la aplicación para conectar a la base de datos y otras configuraciones.


2.  **Base de Datos con Docker:**

    Para configurar la base de datos PostgreSQL, ejecuta el siguiente comando en el directorio raíz del proyecto (`backend` si está separado del directorio raíz):

    ```
    docker-compose up -d
    ```
    Este comando creará y ejecutará un contenedor Docker con la base de datos PostgreSQL, utilizando la configuración definida en el archivo `docker-compose.yml`.

    _Nota_: Asegúrate de tener Docker instalado y en ejecución antes de ejecutar este comando.




## Ejecución del Proyecto

Una vez que la base de datos esté configurada, sigue estos pasos para ejecutar el proyecto:

1.  **Instalación de Dependencias:**

    Navega al directorio del proyecto (`backend` si está separado del directorio raíz) y ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```
    npm install
    ```
    Esto instalará todos los módulos necesarios especificados en el archivo `package.json`.


2.  **Ejecutar en Modo Desarrollo:**

    Para iniciar el proyecto en modo desarrollo, utiliza el siguiente comando:

    ```
    npm run dev
    ```
    Esto iniciará el servidor de desarrollo con recarga automática para facilitar el desarrollo.

3.  **Popular la base de datos con datos por Defecto (Opcional):**

    Si deseas popular la base de datos con datos predefinidos (para pruebas o desarrollo), puedes ejecutar el siguiente comando:

    ```
    npm run seed
    ```
    Este comando ejecutará un script que insertará datos predefinidos en la base de datos, lo que es útil para pruebas y desarrollo inicial.


## Consideraciones Finales

### Archivo `.env`

Este proyecto utiliza variables de entorno para configurar diversos aspectos como la conexión a la base de datos, el puerto del servidor y otras opciones importantes.

*   **Revisa el archivo `.env`:** Es crucial que revises el archivo `.env` en el directorio raíz del proyecto (`backend` si está separado del directorio raíz). En este archivo, podrás modificar los valores de las variables de entorno para adaptarlos a tu configuración local. Por ejemplo, puedes cambiar el puerto en el que se ejecuta el servidor o las credenciales de la base de datos.

    _Nota_: Es importante no compartir este archivo con información sensible (como credenciales) en repositorios públicos.

### Puertos

La aplicación, por defecto, utilizará el puerto que definas en la variable de entorno `PORT` dentro del archivo `.env`. Asegúrate de que este puerto esté disponible y no sea utilizado por otra aplicación en tu sistema.

## Uso

Una vez que el proyecto esté en ejecución, podrás acceder a la aplicación a través de tu navegador web utilizando la dirección y el puerto especificados en tu archivo `.env`.
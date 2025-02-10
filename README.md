# Administrador de Librería

Este repositorio contiene la implementación de una aplicación para el manejo administrativo de una librería. La aplicación está dividida en dos partes:

- **Backend**: Implementado en Node.js, ubicado en la carpeta `backend`.
- **Frontend**: Implementado en React, ubicado en la carpeta `frontend`.

## Despliegue de la Aplicación

Para iniciar la aplicación, es necesario ejecutar el archivo `build.sh`.
En sistemas Ubuntu, se puede ejecutar el siguiente comando en la terminal:

```sh
sh build.sh
```

### Configuración de Variables de Entorno

Si es necesario modificar alguna variable de entorno antes de ejecutar el script de despliegue, se debe editar el archivo `.env_sample` ubicado en la raíz del proyecto.

Se recomienda mantener los valores de las siguientes variables:

- `PORT`
- `DB_DB_PORT`

## Endpoints del Backend

El backend proporciona varios endpoints que pueden ser consultados utilizando Postman. La colección de APIs está disponible en el archivo:

```
backend/resources/libreria_APis.postman_collection.json
```

Este archivo puede ser importado en Postman para facilitar las pruebas de los servicios.

## Acceso a la Aplicación

Después de ejecutar el script `build.sh`, la aplicación estará disponible en el siguiente enlace:

```
http://localhost:5173/
```

Los usuarios disponibles para acceder a la aplicación son:

- **Correo**: jperez@gmail.com
- **Correo**: lcaceres@gmail.com

La contraseña de acceso está especificada en el archivo `.env_sample` en la raíz del proyecto, en el campo:

```
USER_PWD
```

## Notas Adicionales

Asegúrese de contar con todas las dependencias necesarias instaladas y de configurar correctamente las variables de entorno antes de iniciar la aplicación.


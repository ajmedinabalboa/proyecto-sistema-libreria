import express from 'express';
import morgan from 'morgan';
import marcasRoutes from './routers/marcas.routers.js';
<<<<<<< HEAD

import usersRoutes from './routers/usuarios.routers.js';
import categoriasRoutes from './routers/categorias.routers.js';
import proveedorRoutes from './routers/proveedor.routers.js';
=======
import usersRoutes from './routers/usuarios.routers.js';
import categoriasRoutes from './routers/categorias.routers.js';
import proveedoresRoutes from './routers/proveedores.routers.js';
import unidadesmedidasRoutes from './routers/unidadesmedidas.routers.js';
>>>>>>> a2acded5c95b7c1079d68ebb9da7a9f5ded89671

const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/marcas', marcasRoutes)
app.use('/api/usuarios', usersRoutes)
app.use('/api/categorias', categoriasRoutes)
<<<<<<< HEAD
app.use('/api/proveedor', proveedorRoutes)
app.use('/api/proveedor', proveedorRoutes)
=======
app.use('/api/proveedores', proveedoresRoutes)
app.use('/api/unidadesmedidas', unidadesmedidasRoutes)
>>>>>>> a2acded5c95b7c1079d68ebb9da7a9f5ded89671

export default app;
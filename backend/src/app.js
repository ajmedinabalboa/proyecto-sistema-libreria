import express from 'express';
import morgan from 'morgan';
import marcasRoutes from './routers/marcas.routers.js';
import usersRoutes from './routers/usuarios.routers.js';
import categoriasRoutes from './routers/categorias.routers.js';
import proveedoresRoutes from './routers/proveedores.routers.js';

const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/marcas', marcasRoutes)
app.use('/api/usuarios', usersRoutes)
app.use('/api/categorias', categoriasRoutes)
app.use('/api/proveedores', proveedoresRoutes)

export default app;
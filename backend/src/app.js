import express from 'express';
import morgan from 'morgan';
import marcasRoutes from './routers/marcas.routers.js';
<<<<<<< HEAD
import usersRoutes from './routers/usuarios.routers.js';
import categoriasRoutes from './routers/categorias.routers.js';
=======
>>>>>>> 754e1a6b1fb177bb4f7fc68d8d4851c27c3509fa
import proveedorRoutes from './routers/proveedor.routers.js';

const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/marcas', marcasRoutes)
<<<<<<< HEAD
app.use('/api/usuarios', usersRoutes)
app.use('/api/categorias', categoriasRoutes)
app.use('/api/proveedor', proveedorRoutes)

=======
app.use('/api/proveedor', proveedorRoutes)
>>>>>>> 754e1a6b1fb177bb4f7fc68d8d4851c27c3509fa

export default app;
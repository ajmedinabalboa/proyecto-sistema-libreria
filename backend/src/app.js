import express from 'express';
import morgan from 'morgan';
import marcasRoutes from './routers/marcas.routers.js';
import usersRoutes from './routers/usuarios.routers.js';
import categoriasRoutes from './routers/categorias.routers.js';
import proveedoresRoutes from './routers/proveedores.routers.js';
import unidadesmedidasRoutes from './routers/unidadesmedidas.routers.js';
import cors from 'cors';
import materialesRoutes from './routers/materiales.routers.js';

const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/marcas', marcasRoutes)
app.use('/api/usuarios', usersRoutes)
app.use('/api/categorias', categoriasRoutes)
app.use('/api/proveedores', proveedoresRoutes)
app.use('/api/unidadesmedidas', unidadesmedidasRoutes)
app.use('/api/materiales', materialesRoutes)

export default app;
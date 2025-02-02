import express from 'express';
import morgan from 'morgan';
import marcasRoutes from './routers/marcas.routers.js';
import proveedorRoutes from './routers/proveedor.routers.js';

const app = express();

// Middleware for logging HTTP requests
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/marcas', marcasRoutes)
app.use('/api/proveedor', proveedorRoutes)

export default app;
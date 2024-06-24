// Importamos la clase 'Elysia' desde el paquete 'elysia'
import { Elysia } from 'elysia';
// Importamos las rutas de la API definidas en el archivo './logic/TypeScript/routes'
import { api } from './logic/TypeScript/routes';

// Creamos una nueva instancia de 'Elysia'
const app = new Elysia()
    // Agrupamos todas las rutas bajo el prefijo '/api'
    .group('/api', (app) => app.use(api))
    // Configuramos la aplicación para que escuche en el puerto 3000
    .listen(3000)

// Imprimimos un mensaje en la consola para indicar que el servidor está en funcionamiento
console.log('Server is running at port 3000');

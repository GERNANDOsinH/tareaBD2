import { Elysia } from 'elysia'
import { api } from './logic/TypeScript/routes';



const app = new Elysia()
    .group('/api', (app) => app.use(api))
    .listen(3000)
console.log('Server is runnig at port 3000')
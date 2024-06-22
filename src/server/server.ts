import { Elysia } from 'elysia'
import { api } from '../logic/TypeScript/routes';



export class Server {
    private app: Elysia;
    constructor(){
        this.app = new Elysia()
            .group('/api', (app) => app.use(api))
    }

    public start() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running on ort 3000,')
        })
    }
}
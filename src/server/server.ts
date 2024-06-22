import { Elysia } from 'elysia'
import { userRouter} from '../logic/userRouter.js'

export class Server {
    private app: Elysia

    constructor(){
        this.app = new Elysia()
        this.app.group('/api/', (app) => 
            app.use(userRouter)
        )
    }

    public start() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running on ort 3000')
        })
    }
}
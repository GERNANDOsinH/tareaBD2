import { Elysia , t} from 'elysia'
import { crearUsuario, marcarCorreo, desmarcarCorreo, bloquear, informacion, datosMarcarCorreo, datosNuevoUsuario } from './scriptUsers'

export const userRouter = new Elysia()
    .get('/informacion/:correo',({ params : {correo} }) => correo)
    .post('/registar',() => 'Registrar Usuario')
    .post('/bloquear',() => 'Bloquear Usuario')
    .post('/marcarcorreo', () => 'Marcar Correo')
    .delete('/desmarcarcorreo', () => 'Eliminar Favorito')
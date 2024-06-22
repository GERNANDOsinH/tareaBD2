import { Elysia, t } from 'elysia'
import { consulta } from './scriptUsers.js'



const miConsulta = new consulta(); 

export const api = new Elysia({prefix: '/api'})
    .get('/informacion/:correo',({ params : {correo} }) => {return miConsulta.informacion(correo)})
    .post('/registar',({ body }) => miConsulta.crearUsuario(body), {
        body: t.Object({
            email: t.String(),
            nombre: t.String(),
            descripcion: t.String(),
            clave: t.String()
            })
        }
    )
    .post('/bloquear',({ body }) => miConsulta.bloquear(body), {
        body: t.Object({
            email1: t.String(),
            clave: t.String(),
            email2: t.String()
        })
    })
    .post('/marcarcorreo', ({ body }) => miConsulta.marcarCorreo(body), {
        body: t.Object({
            email1: t.String(),
            clave: t.String(),
            email2: t.String()
        })
    })
    .delete('/desmarcarcorreo', ({ body }) => miConsulta.desmarcarCorreo(body), {
        body: t.Object({
            email1: t.String(),
            clave: t.String(),
            email2: t.String()
        })
    })
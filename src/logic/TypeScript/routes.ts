import { Elysia, t } from 'elysia'
import { consulta } from './scriptUsers.js'



const miConsulta = new consulta(); 

export const api = new Elysia()
    .get('/informacion/:correo',({ params : {correo} }) => {return miConsulta.informacion(correo)})
    .post('/registrar', miConsulta.crearUsuario.bind(miConsulta.crearUsuario),{
        body: t.Object({
            nombre: t.String(),
            correo: t.String(),
            clave: t.String(),
            descripcion: t.String()
        })
    })
    .post('/bloquear', miConsulta.bloquear.bind(miConsulta.bloquear), {
        body: t.Object({
            email1: t.String(),
            clave: t.String(),
            email2: t.String()
        })
    })
    .post('/marcarcorreo', miConsulta.marcarCorreo.bind(miConsulta.marcarCorreo), {
        body: t.Object({
            email1: t.String(),
            clave: t.String(),
            email2: t.String()
        })
    })
    .delete('/desmarcarcorreo', miConsulta.desmarcarCorreo.bind(miConsulta.desmarcarCorreo), {
        body: t.Object({
            email1: t.String(),
            clave: t.String(),
            email2: t.String()
        })
    })
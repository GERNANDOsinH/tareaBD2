// Importamos las dependencias necesarias desde el paquete 'elysia'
import { Elysia, t } from 'elysia';
// Importamos el módulo de consultas que contiene las funciones para interactuar con la base de datos o la lógica de negocio
import { consulta } from './scriptUsers.js';

// Creamos una nueva instancia de la clase 'consulta' que contiene métodos para gestionar usuarios y sus datos
const miConsulta = new consulta(); 

// Exportamos la instancia de Elysia como 'api' y configuramos las rutas de la API
export const api = new Elysia()
    // Ruta GET para obtener información de un usuario por su correo
    .get('/informacion/:correo', ({ params: { correo } }) => {
        // Llamamos al método 'informacion' de 'miConsulta' con el correo proporcionado
        return miConsulta.informacion(correo);
    })
    
    // Ruta POST para registrar un nuevo usuario
    .post('/registrar', miConsulta.crearUsuario.bind(miConsulta.crearUsuario), {
        // Especificamos la estructura del cuerpo de la solicitud esperada usando el validador de tipo 't'
        body: t.Object({
            nombre: t.String(),     // Campo 'nombre' debe ser una cadena
            correo: t.String(),     // Campo 'correo' debe ser una cadena
            clave: t.String(),      // Campo 'clave' debe ser una cadena
            descripcion: t.String() // Campo 'descripcion' debe ser una cadena
        })
    })

    // Ruta POST para bloquear a un usuario
    .post('/bloquear', ({ body }) => miConsulta.bloquear(body), {
        // Especificamos la estructura del cuerpo de la solicitud esperada usando el validador de tipo 't'
        body: t.Object({
            email1: t.String(), // Campo 'email1' debe ser una cadena
            clave: t.String(),  // Campo 'clave' debe ser una cadena
            email2: t.String()  // Campo 'email2' debe ser una cadena
        })
    })

    // Ruta POST para marcar un correo como leído o importante
    .post('/marcarcorreo', ({ body }) => miConsulta.marcarCorreo(body), {
        // Especificamos la estructura del cuerpo de la solicitud esperada usando el validador de tipo 't'
        body: t.Object({
            email1: t.String(), // Campo 'email1' debe ser una cadena
            clave: t.String(),  // Campo 'clave' debe ser una cadena
            email2: t.String()  // Campo 'email2' debe ser una cadena
        })
    })

    // Ruta DELETE para desmarcar un correo
    .delete('/desmarcarcorreo', ({ body }) => miConsulta.desmarcarCorreo(body), {
        // Especificamos la estructura del cuerpo de la solicitud esperada usando el validador de tipo 't'
        body: t.Object({
            email1: t.String(), // Campo 'email1' debe ser una cadena
            clave: t.String(),  // Campo 'clave' debe ser una cadena
            email2: t.String()  // Campo 'email2' debe ser una cadena
        })
    });

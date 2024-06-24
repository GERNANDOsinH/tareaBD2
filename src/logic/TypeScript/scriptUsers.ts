// Importamos PrismaClient desde el paquete @prisma/client
const { PrismaClient } = require('@prisma/client');

// Creamos una nueva instancia de PrismaClient
const prisma = new PrismaClient();

// Función asíncrona para buscar un usuario por email y clave
async function buscar(email: string, clave: string) {
    // Buscamos un usuario único por email
    const user = await prisma.Usuario.findUnique({
        where: {
            email: email
        }
    });
    
    // Comparamos la clave proporcionada con la clave del usuario encontrado
    if (user && user.clave === clave) return true;
    return false;
}

// Exportamos la clase consulta
export class consulta {
    // Constructor vacío
    constructor() {}

    // Método público y asíncrono para crear un usuario
    public async crearUsuario(datos: { nombre: string, correo: string, descripcion: string, clave: string }) {
        try {
            // Creamos un nuevo usuario en la base de datos
            const newUser = await prisma.Usuario.create({
                data: {
                    nombre: datos.nombre,
                    correo: datos.correo,
                    clave: datos.clave,
                    descripcion: datos.descripcion
                }
            });
        } catch (error) {
            // Capturamos y mostramos cualquier error que ocurra
            console.error('Error al crear usuario:', error);
        } finally {
            // Nos desconectamos de la base de datos
            await prisma.$disconnect();
        }
    }

    // Método público y asíncrono para obtener la información de un usuario
    public async informacion(email: string) {
        try {
            // Buscamos un usuario único por email
            const user = await prisma.Usuario.findUnique({
                where: {
                    email: email
                }
            });
            // Si el usuario no existe, devolvemos null
            if (user == null) return;
            // Devolvemos los datos del usuario
            return {
                nombre: user.nombre,
                correo: user.correo,
                descripcion: user.descripcion
            };
        } catch (error) {
            // Capturamos y mostramos cualquier error que ocurra
            console.error('Error al encontrar los datos del usuario:', error);
        }
    }

    // Método público y asíncrono para bloquear un usuario
    public async bloquear(datos: { email1: string, clave: string, email2: string }) {
        // Verificamos la autenticidad del usuario
        if (!(await buscar(datos.email1, datos.clave))) {
            return;
        }
        try {
            // Creamos una nueva entrada en la tabla de direcciones bloqueadas
            const newUser = await prisma.direccion_bloqueada.create({
                data: {
                    correo_usuario: datos.email1,
                    direccion_bloqueada: datos.email2
                }
            });
        } catch (error) {
            // Capturamos y mostramos cualquier error que ocurra
            console.error('Error al bloquear usuario:', error);
        } finally {
            // Nos desconectamos de la base de datos
            await prisma.$disconnect();
        }
    }

    // Método público y asíncrono para marcar un correo como favorito
    public async marcarCorreo(datos: { email1: string, clave: string, email2: string }) {
        // Verificamos la autenticidad del usuario
        if (!(await buscar(datos.email1, datos.clave))) {
            return;
        }
        try {
            // Creamos una nueva entrada en la tabla de direcciones favoritas
            const newUser = await prisma.direccion_favorita.create({
                data: {
                    correo_usuario: datos.email1,
                    direccion_favorita: datos.email2
                }
            });
        } catch (error) {
            // Capturamos y mostramos cualquier error que ocurra
            console.error('Error al Marcar al Usuario:', error);
        } finally {
            // Nos desconectamos de la base de datos
            await prisma.$disconnect();
        }
    }

    // Método público y asíncrono para desmarcar un correo como favorito
    public async desmarcarCorreo(datos: { email1: string, clave: string, email2: string }) {
        // Verificamos la autenticidad del usuario
        if (!(await buscar(datos.email1, datos.clave))) {
            return;
        }
        try {
            // Eliminamos una entrada en la tabla de direcciones favoritas
            const newUser = await prisma.direccion_favorita.delete({
                where: {
                    correo_usuario: datos.email1,
                    direccion_favorita: datos.email2
                }
            });
        } catch (error) {
            // Capturamos y mostramos cualquier error que ocurra
            console.error('Error al Desmarcar al Usuario:', error);
        } finally {
            // Nos desconectamos de la base de datos
            await prisma.$disconnect();
        }
    }
}

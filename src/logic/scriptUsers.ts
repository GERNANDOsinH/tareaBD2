const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export interface datosNuevoUsuario{
    email: string,
    nombre: string
    descripcion: string,
    clave: string
}
export interface datosMarcarCorreo {
    email1: string,
    clave: string,
    email2: string
}

export async function crearUsuario(datos: datosNuevoUsuario){
    try {
        const newUser = await prisma.Usuario.create({
            data: {
                nombre: datos.nombre,
                email: datos.email,
                clave: datos.clave,
                descripcion: datos.descripcion
            }
        })
    }
    catch(error){
        console.error('Error al crear usuario:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function informacion(email: string){
    try{
        const user = await prisma.Usuario.findUnique({
            datos: {
                email: email
            }
        })
    }
    catch(error){
        console.error('Error al encontrar los datos del usuario:', error);
    }
}

export async function bloquear(datos: datosMarcarCorreo){
    if (await buscar(datos.email1,datos.clave)){
        return 
    }
    try {
        const newUser = await prisma.direccion_bloqueada.create({
            data: {
                correo_usuario: datos.email1,
                direccion_bloqueada: datos.email2
            }
        })
    }
    catch(error){
        console.error('Error al bloquear usuario:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function marcarCorreo(datos:datosMarcarCorreo){
    if (await buscar(datos.email1,datos.clave)){
        return 
    }
    try {
        const newUser = await prisma.direccion_favorita.create({
            data: {
                correo_usuario: datos.email1,
                direccion_favorita: datos.email2
            }
        })
    }
    catch(error){
        console.error('Error al Marcar al Usuario:', error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function desmarcarCorreo(datos:datosMarcarCorreo) {
    if (await buscar(datos.email1,datos.clave)){
        return 
    }
    try {
        const newUser = await prisma.direccion_favorita.delete({
            where: {
                correo_usuario: datos.email1,
                direccion_favorita: datos.email2
            }
        })
    }
    catch(error){
        console.error('Error al Desmarcar al Usuario:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function buscar(email:string,clave:string){

    const user = await prisma.Usuario.findUnique({
        where: {
            email: email
        }
    })
    if (user.clave === clave) return true
    return false

}
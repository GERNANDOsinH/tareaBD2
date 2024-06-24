const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function buscar(email:string,clave:string){

    const user = await prisma.Usuario.findUnique({
        where: {
            email: email
        }
    })
    if (user.clave === clave) return true
    return false

}

export class consulta {
    constuctor(){}

    public async crearUsuario(datos: {nombre: string,correo: string, descripcion: string, clave: string}) {
        try {
            const newUser = await prisma.Usuario.create({
                data: {
                    nombre: datos.nombre,
                    correo: datos.correo,
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
    public async informacion(email: string) {
        try{
            const user = await prisma.Usuario.findUnique({
                where: {
                    email: email
                }
            })
            if (user == null) return;
            return {
                nombre: user.nombre,
                correo: user.correo,
                descripcion: user.descripcion
            }
        }
        catch(error){
            console.error('Error al encontrar los datos del usuario:', error);
        }
    }
    public async bloquear(datos: {email1: string, clave: string, email2: string}) {
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
    public async marcarCorreo(datos: {email1: string, clave: string, email2: string}) {
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
    public async desmarcarCorreo(datos: {email1: string, clave: string, email2: string}) {
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
}
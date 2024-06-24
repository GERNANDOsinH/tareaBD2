#importar las archivos .py
from logic.python.registrar import registrarUsuario
from logic.python.informacion import buscarInformacion
from logic.python.bloquear import bloquearUsuario
from logic.python.marcar import marcarFavorito
from logic.python.desmarcar import desmarcarFavorito

# servidor
url = "http://localhost:3000"

operacion = 0

print("Inicio de la API")
print("")
print("Ingrese su correo: ")
correo = input() # falta
print("Ingrese su password: ")
nombre = input() # falta

#Interfaz 
while (operacion != 6):
    print("Ingrese la operacion que decea hacer: ")
    print("")
    print("1. Registrar usuario.")
    print("2. Información.")
    print("3. Bloquear un usuario.")
    print("4. Marcar un correo como Favorito.")
    print("5. Desmarcar marcar un correo como Favorito.")
    print("6. Salir.")
    print("")
    operacion = int(input())
    if (operacion == 6): exit(0)
    elif (operacion == 1): registrarUsuario(url)
    elif (operacion == 2): buscarInformacion(url)
    elif (operacion == 3): bloquearUsuario(url)
    elif (operacion == 4): marcarFavorito(url)
    elif (operacion == 5): desmarcarFavorito(url)
    else: print("Error")
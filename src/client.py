from logic.python.registrar import registrarUsuario
from logic.python.informacion import buscarInformacion
from logic.python.bloquear import bloquearUsuario
from logic.python.marcar import marcarFavorito
from logic.python.desmarcar import desmarcarFavorito

url = "http://localhost:3000"
operacion = 0
while (operacion != 6):
    print("(1) Registrar Usuario\n")
    print("(2) Información\n")
    print("(3) Bloquear\n")
    print("(4) Marcar Correo\n")
    print("(5) Desmarcar Correo\n")
    print("(6) Salir\n")
    operacion = int(input("Ingrese la Operacion que desea realizar\n"))
    if (operacion == 6): exit(0)
    elif (operacion == 1): registrarUsuario(url)
    elif (operacion == 2): buscarInformacion(url)
    elif (operacion == 3): bloquearUsuario(url)
    elif (operacion == 4): marcarFavorito(url)
    elif (operacion == 5): desmarcarFavorito(url)
    else: print("Error")
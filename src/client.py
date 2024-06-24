from logic.python.registrar import registrarUsuario
from logic.python.informacion import buscarInformacion
from logic.python.bloquear import bloquearUsuario
from logic.python.marcar import marcarFavorito
from logic.python.desmarcar import desmarcarFavorito

url = "http://localhost:3000"
operacion = ""
while (operacion != "Salir"):
    operacion = input("Ingrese la Operacion que desea realizar\n")
    if (operacion == "Salir"): exit(0)
    elif (operacion == "Registrar usuario"): registrarUsuario(url)
    elif (operacion == "Información"): buscarInformacion(url)
    elif (operacion == "bloquear"): bloquearUsuario(url)
    elif (operacion == "Marcar Correo"): marcarFavorito(url)
    elif (operacion == "Desmarcar Correo"): desmarcarFavorito(url)
    else: print("Error")
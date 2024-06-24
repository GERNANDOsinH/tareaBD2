import requests

def buscarInformacion(url):
    
    print("Esta en la URL para buscar informacion de un correo.")

    # Capturar datos de datos
    email = input("Ingrese el email que desea consultar")

    
    response = requests.get(url+"/api/informacion"+email)
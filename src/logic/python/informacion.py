import requests

def buscarInformacion(url):
    email = input("Ingrese el email que desea consultar\n")
    
    response = requests.get(url+"/api/informacion/"+email)
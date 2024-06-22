import requests

def buscarInformacion(url):
    email = input("Ingrese el email que desea consultar")
    
    response = requests.get(url+"/api/informacion/"+email)
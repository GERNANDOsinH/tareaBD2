import requests
import json

def desmarcarFavorito(url):
    
    print("Esta en la URL para desmarcar un correo de Favoritos.")
    # Capturar datos de datos

    data = {"email1": input("Ingrese su Correo:\n "),
            "clave": input("Ingrese su clave:\n "),
            "email2": input("Ingrese el correo que desea desmarcar de favoritos:\n ")}
            
    # Convertir diccionario a JSON
    json_data = json.dump(data)


    response = requests.delete(url+"/api/desmarcarcorreo", headers={'Content-Type': 'application/json'}, data=json_data)
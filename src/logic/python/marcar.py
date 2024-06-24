import requests
import json

def marcarFavorito(url):
    print("Esta en la URL de marcar un correo como favorito.")
    # Capturar datos de datos
    data = {"email1": input("Ingrese su Correo:\n "),
            "clave": input("Ingrese su clave:\n "),
            "email2": input("Ingrese el correo que desea marcar como favorito:\n ")}

    # Convertir diccionario a JSON
    json_data = json.dump(data)

    response = requests.post(url+"/api/marcarcorreo", headers={'Content-Type': 'application/json'}, data=json_data)
    
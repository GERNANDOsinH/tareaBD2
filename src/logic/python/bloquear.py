import requests
import json

def bloquearUsuario(url):
    
    print("Esta en la URL para bloquear un correo.")

    # Capturar datos de datos
    data = {"email1": input("Ingrese su Correo:\n "),
            "clave": input("Ingrese su clave:\n "),
            "email2": input("Ingrese el correo que desea bloquear:\n ")}

    data = {'email1': input(), 'clave': input(), 'email2': input()}

    # Convertir diccionario a JSON
    json_data = json.dumps(data)
    
    response = requests.post(url+"/bloquear", headers={'Content-Type': 'application/json'}, data=json_data)
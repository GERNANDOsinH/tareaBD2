import requests
import json

def registrarUsuario(url):
    data = {"nombre": input("Ingrese Nombre:\n"),
            "correo": input("Ingrese Correo:\n"),
            "clave": input("Ingrese Clave:\n"),
            "descripcion": input("Ingrese Descripción:\n")}
    json_data = json.dumps(data)

    response = requests.post(url+"/api/registrar", headers={'Content-Type': 'application/json'}, data=json_data)

    if response.status_code == 200:
        print('Datos enviados correctamente:')
    else:
        print('Error al enviar los datos:', response.status_code, response.text)
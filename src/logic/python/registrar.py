import requests
import json

def registrarUsuario(url):
    data = {'email': input(), 'nombre': input(), 'descripcion': input(), 'clave': input()}
    json_data = json.dumps(data)

    response = requests.post(url+"/api/registrar", headers={'Content-Type': 'application/json'}, data=json_data)

    if response.status_code == 200:
        print('Datos enviados correctamente:', response.json())
    else:
        print('Error al enviar los datos:', response.status_code, response.text)
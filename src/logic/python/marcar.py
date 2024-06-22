import requests
import json

def marcarFavorito(url):
    data = {'email1': input(), 'clave': input(), 'email2': input()}
    json_data = json.dump(data)

    response = requests.post(url+"/api/marcarcorreo", headers={'Content-Type': 'application/json'}, data=json_data)
    
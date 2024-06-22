import requests
import json

def bloquearUsuario(url):
    data = {'email1': input(), 'clave': input(), 'email2': input()}
    json_data = json.dumps(data)
    
    response = requests.post(url+"/api/bloquear", headers={'Content-Type': 'application/json'}, data=json_data)
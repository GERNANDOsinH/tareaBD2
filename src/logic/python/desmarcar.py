import requests
import json

def desmarcarFavorito(url):
    data = {'email1': input(), 'clave': input(), 'email2': input()}
    json_data = json.dump(data)

    response = requests.delete(url+"/api/desmarcarcorreo", headers={'Content-Type': 'application/json'}, data=json_data)
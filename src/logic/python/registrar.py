import requests
import json

def registrarUsuario(url):
    print("Esta en la URL de registra un usuario.")
    # Capturar datos de datos
    data = {"nombre": input("Ingrese Nombre:\n"),
            "correo": input("Ingrese Correo:\n"),
            "clave": input("Ingrese Clave:\n"),
            "descripcion": input("Ingrese Descripción:\n")}

    # Convertir diccionario a JSON
    json_data = json.dumps(data)
    
    try:
        response = requests.post(f"{url}/registrar", headers={'Content-Type': 'application/json'}, data=json_data)


        if response.status_code == 200:
            print('Datos enviados correctamente', response.json())
        else:
            print('Error al enviar los datos:', response.status_code, response.text)
            
    except requests.exceptions.RequestException as e:
        print('Ocurrió un error al enviar la solicitud:', e)
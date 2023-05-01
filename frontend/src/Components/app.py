from flask import Flask, send_from_directory
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return send_from_directory('static', 'faceRecognition.js')

@app.route('/run-facial-recognition')
def run_facial_recognition():
    try:
        print("Calling script")
        subprocess.run(['python', 'C:/Users/admin/Desktop/facial recognition/FaceRecognition/main.py'], check=True)
        return 'Facial recognition script executed successfully!'
    except subprocess.CalledProcessError:
        return 'Error: Facial recognition script failed to execute.'

if __name__ == '__main__':
    app.run(debug=True)

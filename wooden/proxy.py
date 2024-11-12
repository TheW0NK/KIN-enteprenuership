from flask import Flask, request, Response
import requests

app = Flask(__name__)

@app.route('/')
def proxy():
    target_url = 'https://sites.google.com/psdschools.org/wooden?usp=sharing'
    response = requests.get(target_url)
    return Response(response.content, content_type=response.headers['Content-Type'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
#!/venv/bin/python

# external dependencies
from flask import Flask, request, Response, send_from_directory
from dotenv import load_dotenv
from os.path import join, dirname
import os
import json

# internal dependencies
#create app
app = Flask(__name__, template_folder="client")

# load env file
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

def getResponse(errorCode, errorMessage):
    return Response(errorMessage, status=errorCode, mimetype="text/html")

def serveIndex():
    f = open(f"../frontend/index.html", "r")
    return f.read()


@app.route("/", methods=["GET"])
def index():
    return serveIndex()



if __name__ == "__main__":
    app.run(host="0.0.0.0")

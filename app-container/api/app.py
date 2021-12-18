#!/venv/bin/python

# external dependencies
from flask import Flask, request, Response, render_template
from dotenv import load_dotenv
from os.path import join, dirname
import os
import json

# internal dependencies
#create app
app = Flask(__name__, template_folder="../client")

# load env file
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

host = "http://localhost:80" if os.getenv("ENVIRONMENT") == "development" else ""

def getResponse(responseCode, responseMessage):
    return Response(responseMessage, status=responseCode, mimetype="application/json")


# api routes
@app.route("/locations", methods=["GET"])
def index():
    return getResponse(200, "nuffin")



if __name__ == "__main__":
    app.run(host="0.0.0.0")

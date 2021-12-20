#!/venv/bin/python

# external dependencies
import json
import requests
import os
import pprint

# internal dependencies


def getLocations():

    foursquare_api_key = os.getenv("FOURSQUARE_API_KEY")


    url = "https://api.foursquare.com/v3/places/search?query=lon"
    url = "https://api.foursquare.com/v3/places/search?query=lon&near=united%20kingdom"

    url = "https://api.foursquare.com/v3/places/search?categories=16000&near=London"

    headers = {

        "Accept": "application/json",
        "Authorization": foursquare_api_key
    }

    response = requests.request("GET", url, headers=headers)


    pprint.pprint(response.text)

    results = json.loads(response.text)["results"]


    for result in results:
        print(result["name"])


    return [
        "New York",
        "London",
        "paris",
        "Berlin",
        "Tokyo",
        "Dublin",
        "Munich",
        "Oslo",
        "Birmingham",
    ]
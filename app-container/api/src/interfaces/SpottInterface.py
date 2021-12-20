#!/venv/bin/python

# external dependencies
import json
import requests
import os
import pprint

# internal dependencies


def formatLocation(spottLocation):

    return {
        "id": spottLocation["id"],
        "name": spottLocation["name"],
        "region": spottLocation["adminDivision1"]["name"],
        "country": spottLocation["country"]["name"]
    }

def getLocations(locationQuery: str):

    spott_api_key = os.getenv("SPOTT_API_KEY")
    url = "https://spott.p.rapidapi.com/places/autocomplete"
    headers = {
        "Accept": "application/json",
        'x-rapidapi-host': 'spott.p.rapidapi.com',
        'x-rapidapi-key': spott_api_key
    }
    params = {"type": 'CITY', "q": locationQuery, "skip": '0', "limit": '10'}

    response = requests.request("GET", url, params=params, headers=headers)
    rawLocations = json.loads(response.text)
    locations = [ formatLocation(location) for location in rawLocations ]

    return locations
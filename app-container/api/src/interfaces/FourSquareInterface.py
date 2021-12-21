#!/venv/bin/python

# external dependencies
import json
import requests
import os
import pprint
import enum

# internal dependencies
from src.models.Attraction import Attraction
 
# creating enumerations using class
class FourSquareUrlSuffixes(enum.Enum):
    LOCATIONATTRACTIONS = 1
    ATTRACTIONIMAGES = 2

def getHeaders():
    return {
        "Accept": "application/json",
        "Authorization": os.getenv("FOURSQUARE_API_KEY")
    }

def getFourSquareURL(urlType, embeddableInfo):

    urlBase = "https://api.foursquare.com/v3/places"

    if urlType == FourSquareUrlSuffixes.LOCATIONATTRACTIONS:
        return f"{urlBase}/search?categories=16000&near={embeddableInfo}"
    elif urlType == FourSquareUrlSuffixes.ATTRACTIONIMAGES:
        return f"{urlBase}/{embeddableInfo}/photos"



def getAttractionImageURL(fsqID):

    url = getFourSquareURL(FourSquareUrlSuffixes.ATTRACTIONIMAGES, fsqID)

    response = requests.request("GET", url, headers=getHeaders())
    images = json.loads(response.text)
    if len(images) <= 0:
        raise Exception()
    firstImage = json.loads(response.text)[0]

    return f"{firstImage['prefix']}75x75{firstImage['suffix']}"



def getAttractions(location: str):

    url = getFourSquareURL(FourSquareUrlSuffixes.LOCATIONATTRACTIONS, location)

    response = requests.request("GET", url, headers=getHeaders())
    results = json.loads(response.text)["results"]

    attractions = []

    for result in results:
        attractions.append(
            Attraction( result["fsq_id"], 
                        result["name"], 
                        result["categories"][0]["name"], 
                        result["location"]["country"], 
                        result["location"]["region"],
                        getAttractionImageURL(result["fsq_id"])
            )
        )

    dictAttractions = [ attraction.toDict() for attraction in attractions ]

    return dictAttractions
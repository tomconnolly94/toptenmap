
class Attraction():

    def __init__(self, fsqID: str, name: str, category: str, country: str, region: str, imageURL: str):
        self.fsqID = fsqID
        self.name = name
        self.category = category
        self.country = country
        self.region = region
        self.imageURL = imageURL

    def toDict(self):
        return {
            "fsqID": self.fsqID,
            "name": self.name,
            "category": self.category,
            "country": self.country,
            "region": self.region,
            "imageURL": self.imageURL
        }
import axios from 'axios';
import AttractionList from '../components/AttractionList/AttractionList';
import Attraction from '../models/Attraction';

class HttpRequestInterface {
	constructor() {
	}

    static GetLocations(queryString: string, successCallback: Function, failureCallback: Function){
        axios.get(`http://localhost:5000/locations?query=${queryString}`)
        .then((response) => {
            successCallback(response.data.locations);
        })
        .catch((response) => {
            failureCallback(response);
        })
    }

    static GetLocationAttractions(location: string, successCallback: Function, failureCallback: Function): void{
        axios.get(`http://localhost:5000/attractions?query=${location}`)
        .then((response) => {
            var attractionData = response.data.attractions;

            var attractions = new Array<Attraction>();

            attractionData.forEach((element: { [x: string]: string; }) => {
                attractions.push({
                    id: element["fsqID"],
                    name: element["name"],
                    category: element["category"],
                    country: element["country"],
                    region: element["region"],
                    imageURL: element["imageURL"]
                })
            });

            successCallback(attractions);
        })
        .catch((response) => {
            failureCallback(response);
        })
    }
}

export default HttpRequestInterface;
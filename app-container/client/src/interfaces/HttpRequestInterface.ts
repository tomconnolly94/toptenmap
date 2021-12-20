import axios from 'axios';

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

    static GetLocationAttractions(location: string, successCallback: Function, failureCallback: Function){
        axios.get(`http://localhost:5000/attractions?query=${location}`)
        .then((response) => {
            successCallback(response.data.locations);
        })
        .catch((response) => {
            failureCallback(response);
        })
    }
}

export default HttpRequestInterface;
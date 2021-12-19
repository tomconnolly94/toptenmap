import axios from 'axios';

interface Props {};
interface State {
    suggestions: Array<string>
};

class HttpRequstInterface {
	constructor() {
	}

    GetLocations(successCallback: Function, failureCallback: Function){
        // axios.get('http://localhost:5000/locations')
        // .then((response) => {
        //     successCallback();
        // })
        // .catch(err=>console.log(err))
    }
}

export default HttpRequstInterface;

interface Props {};
interface State {
    suggestions: Array<string>
};

class HttpRequstInterface {
	constructor() {
	}

    GetLocations(){
        var suggestionStore = [
            "New York",
            "London",
            "paris",
            "Berlin",
            "Tokyo",
            "Dublin",
            "Munich",
            "Oslo",
            "Birmingham",
        ];
        return suggestionStore;
    }
}

export default HttpRequstInterface;
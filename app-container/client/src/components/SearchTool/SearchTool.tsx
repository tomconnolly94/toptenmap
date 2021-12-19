import React from 'react';

import './SearchTool.css';
import HttpRequstInterface from "../../interfaces/HttpRequestInterface"

interface Props {};
interface State {
    suggestions: Array<string>
};

class SearchTool extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = { suggestions:[] };
		this.search = this.search.bind(this);
	}

    componentWillMount(){
        let tripAdvisorInterface = new HttpRequstInterface();
        var locations = tripAdvisorInterface.GetLocations();

        console.log(locations);
    }
	
	search(event: any) {
		let input = event.target.value;
		let matches = [];

        // these should be locations from tripadvisor
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
		
		if (input.length <= 1){
            this.setState({ suggestions: [] });
            return;
        }

        const inputRegexComparator =  new RegExp(input,'i');
			
        for (let i = 0; i < suggestionStore.length; i++) {
            let potentialSuggestion = suggestionStore[i];

            if (potentialSuggestion.match(inputRegexComparator)) {
                matches.push(potentialSuggestion);
            }
        }
		
		this.setState({ suggestions: matches });
	}

	render() {
		return (
            <div id="SearchToolContainer" className="container">
               <div id="searchBarContainer" className="row"> 
                  <div className="col-4"></div>
                  <div id="centred-div-text" className="col-4 form-group">
                    <label>Where are you exploring today?</label>

                    <input type="text" className="form-control" onKeyUp={this.search.bind(this)}/> 

                    <React.Fragment>
                        <ul id="location-suggestion-list" className="list-group">
                            {this.state.suggestions.map(res => (
                                <li className="list-group-item" key={res}>
                                    {res}
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                  </div>
                  <div className="col-4"></div>
               </div>
            </div>
		);
	}
}

export default SearchTool;
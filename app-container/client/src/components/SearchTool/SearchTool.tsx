import React, { MouseEventHandler, MouseEvent } from 'react';

import './SearchTool.css';
import HttpRequestInterface from "../../interfaces/HttpRequestInterface"
import Location from "../../models/Location"
import AttractionTile from '../AttractionTile/AttractionTile';
import Attraction from '../../models/Attraction';

interface Props {
    itemSelected: Function
};
interface State {
    suggestions: Array<Location>
};

class SearchTool extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = { suggestions: new Array<Location>() };
		this.search = this.search.bind(this);
	}
	
	search(event: any) {
		let input = event.target.value;
        var reactComponentThis = this;

        HttpRequestInterface.GetLocations(input, (locations: Array<Location>) => {

            let matches = [];

            if (input.length <= 1){
                reactComponentThis.setState({ suggestions: new Array<Location>() });
                return;
            }

            const inputRegexComparator =  new RegExp(input,'i');
                
            for (let i = 0; i < locations.length; i++) {
                let potentialSuggestion = locations[i];

                if (potentialSuggestion.name.match(inputRegexComparator)) {
                    matches.push(potentialSuggestion);
                }
            }
            
            reactComponentThis.setState({ suggestions: matches });

        }, (response: any) => {
            console.log("SearchTool.tsx error");
            console.log(response);
        });
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
                            {this.state.suggestions.map(suggestion => (
                                <a href="#" className="list-group-item list-group-item-action" onClick={() => this.props.itemSelected(suggestion)} key={suggestion["id"]}>
                                    {suggestion["name"]} - {suggestion["region"]} - {suggestion["country"]}
                                </a>
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
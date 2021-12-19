import React from 'react';

import './SearchTool.css';

class SearchTool extends React.Component {
	constructor(props) {
		super(props);
		this.state = { suggestions:[] };
		this.search = this.search.bind(this);
	}
	
	search(event) {
		let input = event.target.value;
		//console.log('event.target.value: ' + input);
		//console.log('this.searchResults: ' + json);
		let matches = [], i;

        // these should be locations from tripadvisor
        var json = [
            "hello",
            "london",
            "paris",
            "paris2",
            "paris3",
            "paris4"
        ];
		
		if (input.length > 1) {
			for (i = 0; i < json.length; i++) {
				if (json[i].match(input)) {
					matches.push(json[i]);
				}
			}
		}
		
		this.setState({ suggestions: matches });
	}

	render() {
		return (
            <div id="SearchToolContainer" class="container">
               <div id="searchBarContainer" class="row"> 
                  <div class="col-4"></div>
                  <div class="col-4">
                    <label>Search Here</label>

                    <input onKeyUp={this.search.bind(this)}/> 

                    <React.Fragment>
                        <ul style={{listStyleType:'none'}}>
                            {this.state.suggestions.map(res => (
                                <li key={res}>
                                    {res}
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                  </div>
                  <div class="col-4"></div>
               </div>
            </div>
		);
	}
}

export default SearchTool;
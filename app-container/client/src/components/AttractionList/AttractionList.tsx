import React from 'react';

// css
import './AttractionList.css';

// internal imports
import Attraction from "../../models/Attraction";

interface Props {
    attractions: Array<Attraction>;
    selectedLocation: string
};
interface State {
};

class AttractionList extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
        this.state = {
        };
	}

	render() {
		return (
                <>
                <div id="AttractionListContainer" className="container">
                    <div className="jumbotron">
                        <h1 id="heading">{this.props.selectedLocation}</h1>
                        <button type="button" className="btn btn-danger">X</button>
                    </div>
                    <React.Fragment>
                        <ul id="location-suggestion-list" className="list-group">
                            {this.props.attractions.map(attraction => (
                                <a href="#" className="list-group-item list-group-item-action" key={attraction["id"]}>
                                    {attraction["name"]} - {attraction["country"]}
                                </a>
                            ))}
                        </ul>
                    </React.Fragment>
                </div>
            </>
		);
	}
}

export default AttractionList;
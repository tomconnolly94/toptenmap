import React from 'react';

import Attraction from "../../models/Attraction";

interface Props {
    attractions: Array<Attraction>
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
                <React.Fragment>
                    <ul id="location-suggestion-list" className="list-group">
                        {this.props.attractions.map(attraction => (
                            <a href="#" className="list-group-item list-group-item-action" key={attraction["id"]}>
                                {attraction["name"]} - {attraction["country"]}
                            </a>
                        ))}
                    </ul>
                </React.Fragment>
            </>
		);
	}
}

export default AttractionList;
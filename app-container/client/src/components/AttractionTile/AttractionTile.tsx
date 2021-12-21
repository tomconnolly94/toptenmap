import React from 'react';

// css
import './AttractionTile.css';

// internal imports
import Attraction from "../../models/Attraction";

interface Props {
    attractionData: Attraction
    removeAttractionTile: Function
};
interface State {
};

class AttractionTile extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
        this.state = {
        };
	}

	render() {
		return (
            <>
                <li id="AttractionTileContainer" className="list-group-item container" key={this.props.attractionData.id}>
                    <div className="row">
                        <div id="AttractionTileImageRegion" className="col-3">
                            <img src={this.props.attractionData.imageURL} />
                        </div>
                        <div id="AttractionTileTextRegion" className="col-7">
                            <h5>{this.props.attractionData.name}</h5>
                            <p>{this.props.attractionData.country}</p>
                        </div>
                        <div className="col-2">
                            <a id="AttractionTileTextRegionRemoveButton" onClick={this.props.removeAttractionTile.bind(this, this.props.attractionData.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </li>
            </>
		);
	}
}

export default AttractionTile;
import React, { ReactComponentElement } from 'react';

// css
import './AttractionList.css';

// internal imports
import Attraction from "../../models/Attraction";
import AttractionTile from '../AttractionTile/AttractionTile';

interface Props {
    attractions: Array<Attraction>;
    selectedLocation: string;
    itemDeselected: Function;
};
interface State {
    attractions: Array<Attraction>
};

class AttractionList extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
        this.state = {
            attractions: []
        };
	}

    componentDidMount(): void {        
        const attractions = this.props.attractions;
        this.setState({
            attractions: attractions
        });
    }

    removeAttractionTile(attractionId: string): void{
        let attractions = this.state.attractions.filter((item: Attraction) => item.id !== attractionId);
        this.setState({
            attractions: attractions
        });
    }

	render() {
		return (
                <>
                <div id="AttractionListContainer" className="container">

                    <div className="btn-group d-flex align-items-center justify-content-center">
                        
                        <h1 id="heading" className="text-center">{this.props.selectedLocation}</h1>
                            <a id="deselectButton" onClick={this.props.itemDeselected.bind(this)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                    </div>
                    <div className="jumbotron row">
                        <div className="col-6 offset-3">
                            <React.Fragment>
                                <ul id="location-suggestion-list" className="list-group">
                                    {this.state.attractions.map(attraction => (
                                        <AttractionTile removeAttractionTile={(id: string) => this.removeAttractionTile(id)} attractionData={attraction}/>
                                    ))}
                                </ul>
                            </React.Fragment>
                        </div>
                    </div>
                </div>
            </>
		);
	}
}

export default AttractionList;
import React, { MouseEventHandler, MouseEvent } from 'react';

import SplashHeader from '../../components/SplashHeader/SplashHeader';
import SearchTool from '../../components/SearchTool/SearchTool';
import AttractionList from '../../components/AttractionList/AttractionList';
import Attraction from "../../models/Attraction";
import Location from "../../models/Location";

interface Props {
    host: string
};
interface State {
    expandedMargin: boolean;
    searchToolVisible: boolean;
    attractions: Array<Attraction>;
    selectedLocation: string;
};
const expandedMarginSize = 250;
const contractedMarginSize = 50;

class IndexPage extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
        this.state = {
            expandedMargin: true,
            searchToolVisible: true,
            attractions: [],
            selectedLocation: null
        };
	}

    getFakeAttractions(){

        var attractionsInLocation = new Array<Attraction>();

        attractionsInLocation.push({
            id: "1",
            name: "Attraction 1",
            country: "UK",
            image_url: "image url 1",
            stars: "4",
        });

        attractionsInLocation.push({
            id: "2",
            name: "Attraction 2",
            country: "UK",
            image_url: "image url 2",
            stars: "5",
        });

        attractionsInLocation.push({
            id: "3",
            name: "Attraction 3",
            country: "UK",
            image_url: "image url 3",
            stars: "2",
        });
        return attractionsInLocation;
    }

    locationSelected(location: Location){

        var attractionsInLocation = this.getFakeAttractions();

        this.setState({
            expandedMargin: false,
            searchToolVisible: false,
            attractions: attractionsInLocation,
            selectedLocation: location["name"]
        });
    }

    locationDeselected(){
        this.setState({
            expandedMargin: true,
            searchToolVisible: true,
            attractions: [],
            selectedLocation: null
        });
    }

	render() {
		return (
            <>
                <SplashHeader host={this.props.host} expandedMargin={this.state.expandedMargin}/>
                { this.state.searchToolVisible ? 
                    <SearchTool itemSelected={(location: Location) => this.locationSelected(location)}/> 
                    : <AttractionList itemDeselected={() => this.locationDeselected()} selectedLocation={this.state.selectedLocation} attractions={this.state.attractions}/>
                    }
            </>
		);
	}
}

export default IndexPage;
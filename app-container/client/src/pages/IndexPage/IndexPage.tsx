import React from 'react';

import SplashHeader from '../../components/SplashHeader/SplashHeader';
import SearchTool from '../../components/SearchTool/SearchTool';
import AttractionList from '../../components/AttractionList/AttractionList';
import Attraction from "../../models/Attraction";
import Location from "../../models/Location";
import HttpRequestInterface from "../../interfaces/HttpRequestInterface"

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

    locationSelected(location: Location){

        var reactComponent = this;

        HttpRequestInterface.GetLocationAttractions(location["name"], (attractions: Array<Attraction>) => {
            
            reactComponent.setState({
                expandedMargin: false,
                searchToolVisible: false,
                attractions: attractions,
                selectedLocation: location["name"]
            });

        }, (response: any) => {
            console.log("SearchTool.tsx error");
            console.log(response);
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
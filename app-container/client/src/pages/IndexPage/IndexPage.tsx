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
    splashHeaderMargin: number;
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
            splashHeaderMargin: expandedMarginSize,
            searchToolVisible: true,
            attractions: [],
            selectedLocation: null
        };
	}

    locationSelected(location: Location){

        var attractionsInLocation = new Array<Attraction>();

        this.setState({
            splashHeaderMargin: contractedMarginSize,
            searchToolVisible: false,
            attractions: attractionsInLocation,
            selectedLocation: location["name"]
        });
    }

    locationDeselected(location: Location){
        this.setState({
            splashHeaderMargin: expandedMarginSize,
            searchToolVisible: true
        });
    }

	render() {
		return (
            <>
                <SplashHeader host={this.props.host} topMargin={this.state.splashHeaderMargin}/>
                { this.state.searchToolVisible ? 
                    <SearchTool itemSelected={(location: Location) => this.locationSelected(location)}/> 
                    : <AttractionList selectedLocation={this.state.selectedLocation} attractions={this.state.attractions}/>
                    }
            </>
		);
	}
}

export default IndexPage;
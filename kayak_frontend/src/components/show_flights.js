import React,{ Component } from 'react';
import { connect } from 'react-redux';
import FlightTile from './searchbars/flight_tiles';
import HomePageHeader from './headers/homepage_header';

import HomeHeader1 from './headers/homepage_header1';

import FlightSearchLeftNav from './searchbars/flight_search_leftnav';
class ShowFlights extends Component {
    constructor(){
        console.log("its show in constructor");
        super();
    }
    render() {
        console.log("It will display list of cars searched by the user");
        return (
            <div>
                <div className="show-flight-header">
                    <HomeHeader1/>
                </div>

                <div className = "car-details-body">
                    <div className ="car-details-body-left-nav">
                      <FlightSearchLeftNav/>
                    </div>
                    <div className ="car-details-body-centre">
                        {this.props.flights.length > 0 ?
                            this.props.flights.map((flight) => {
                                return (<div><FlightTile data={flight} style={{paddingTop: 10}}/></div>);
                            })
                            : ''
                        }
                    </div>
                    <div className ="car-details-body-right-nav">

                    </div>
                </div>

            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log("hiii"+state.flightdetails_reducer.displayflights);
    return {
        flights: state.flightdetails_reducer.displayflights,
    };

}
export default connect(mapStateToProps,null)(ShowFlights);

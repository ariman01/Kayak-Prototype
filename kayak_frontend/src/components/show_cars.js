import React,{ Component } from 'react';
import CarTile from './searchbars/car_tiles';
import HomePageHeader from './headers/homepage_header';
import CarSearchLeftNav from './searchbars/car_search_leftnav';
import { connect } from 'react-redux';
import HomeHeader1 from './headers/homepage_header1';

class ShowCars extends Component {

constructor(){
    console.log("its show in constructor");
  super();
}
  render() {
    return (
              <div>
              <div className="show-car-header">
              <HomeHeader1/>
              </div>

              <div className = "car-details-body">
                <div className ="car-details-body-left-nav">
                  <CarSearchLeftNav/>
                </div>
                <div className ="car-details-body-centre">
                    {this.props.cars.length > 0 ?
                        this.props.cars.map((car) => {
                            return (<div><CarTile data={car} style={{paddingTop: 10}}/></div>);
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
    console.log("show cars: "+state.cardetails_reducer.cars+" state.cardetails_reducer.leftNavCarConfig: "+state.cardetails_reducer.leftNavCarConfig);
    return {
        cars: state.cardetails_reducer.displaycars,
        leftNavCarConfig:state.cardetails_reducer.leftNavCarConfig
    };

}
export default connect(mapStateToProps,null)(ShowCars);

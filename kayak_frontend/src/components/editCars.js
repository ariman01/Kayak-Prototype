import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleCarSearch} from './../api/adminAPI';
import EditCarTile from './searchbars/editcar_tiles';
import AdminDashboardHeader from './headers/admin_dashboard_header';

class EditCars extends Component {
constructor(){
    super();
    this.searchcar ={}
  }

carSearch(data){
  console.log("this.searchcar.name ",this.searchcar.name );
  console.log("this.searchcar.model_no ",this.searchcar.model_no);
  if((this.searchcar.model_no) || (this.searchcar.name)){
    this.props.handleCarSearch(data);
  }else{
    alert("User need to provide either car model no or name");
  }

}
  render() {
    console.log("It will display list of cars searched by the admin :this.searchflight",this.searchflight);
    return (
              <div>
              <div>
                  <AdminDashboardHeader/>
              </div>

              <div className = "car-details-body">
                  <div style = {{marginLeft:420}}>
                      <input placeholder="Car Id" id="model_no" onChange={(model_no) => {this.searchcar.model_no = model_no.target.value}}/>
                       <strong> OR  </strong>
                      <input placeholder="Car Name" id="name" onChange={(name) => {this.searchcar.name = name.target.value}}/>
                      <button style={{marginLeft:15}} onClick ={() => this.carSearch(this.searchcar)} ><strong>Search</strong></button>
                  </div>
                <div className ="car-details-body-left-nav">

                </div>
                <div className ="car-details-body-centre-admin">
                {this.props.listOfSearchedCars.map((car)=>{
                    return (<EditCarTile data={car} style={{paddingTop:10}}/>)
                })}
                </div>
                <div className ="car-details-body-right-nav">

                </div>
              </div>

              </div>
           );
  }
}




function mapDispatchToProps(dispatch) {
    return bindActionCreators({handleCarSearch:handleCarSearch},dispatch);
}

function mapStateToProps(state){
  console.log("Edit cars mapStateToProps: "+state.admin_reducer.listOfSearchedCars);
  return{
      listOfSearchedCars: state.admin_reducer.listOfSearchedCars,
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditCars);

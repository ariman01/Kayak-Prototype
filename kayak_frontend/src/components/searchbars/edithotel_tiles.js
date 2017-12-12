import React,{ Component } from 'react';
import './../../images/home.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import HotelIcon from './../../images/hotelimage.jpg'
import viewDeal from './../../images/viewdeal.png';
import * as adminActions from './../../actions/admin_action';
import {adminHotelDelete} from './../../api/adminAPI';
import {history} from "../../utils/util";
import * as Images from './../../utils/images';

class EditHotelTile extends Component {
  handleEdit(){
      console.log("Hotel edit:",this.props.data);
      this.props.editHotelAdmin(this.props.data);
      history.push('/edithotelform');
  }

  getreview(reviews){
    return reviews.map((review)=>{
      return (<li>{review}</li>);
    });
  }
  getNoofStars(number){
    console.log("number",number);
    var starArray = new Array(Number(number));
    starArray.fill(1);
    return starArray.map((x)=>{
        return <span className="glyphicon glyphicon-star" style={{color:"#FF7F50"}}></span>
    });
  }

  render() {
    console.log("Search leftnav Bar Page");
    return (
      <div className="hotel-tile">
          <div className="tiled1">
                  <div className="tiled1-hotel-img-pane" style={{float:"left"}}>
                    <img  className="hotel-img" src={Images.retrieveHotelImages(this.props.data.hotel_stars)}/>
                  </div>
           </div>

          <div className="tiled2">
                <div style={{marginTop:"5%"}}>
                    <span style={{fontSize:20 ,marginLeft:5}}><b>{this.props.data.hotel_name}</b></span><br/>
                    <span style={{float: "left",marginLeft:5}}>
                  {this.getNoofStars(this.props.data.hotel_stars)}</span><br/>
                </div>
                <div className="hotel-review-rating" >
                      <div className = "hotel-rating">
                          <span style={{marginTop:30,marginLeft:5, backgroundColor: "#00B1E1", color: 'white'}}> {this.props.data.hotel_rating} </span>
                          <br/>
                          <h6>Address : </h6>

                          <h6>{this.props.data.hotel_address}, {this.props.data.hotel_city}, {this.props.data.hotel_state} - {this.props.data.hotel_zip}</h6>
                        </div>

                      <div className = "hotel-review">
                      <h6>Reviews:</h6>

                      {this.getreview(this.props.data.hotel_reviews) }

                      </div>
                </div>

          </div>

          <div className="tiled3">
              <strong style={{fontSize:15,color:"black"}}>Available : {this.props.data.hotel_capacity}</strong><br/>
              <strong style={{fontSize:25,color:"black"}}>${this.props.data.hotel_price}</strong>
              <h4>Total</h4>
              <button onClick ={() => this.handleEdit()} style={{width:"80%",marginTop:"2%"}}><strong>Edit</strong></button>
              <button  onClick ={() => this.props.adminHotelDelete({hotel_id:this.props.data.hotel_id},this.props.latest_admin_search_parameter)} style={{width:"80%",marginTop:"2%"}}><strong>Delete</strong></button>
          </div>
      </div>
          );
  }
}

function mapStateToProps(state) {
    return {
        latest_admin_search_parameter: state.hoteldetails_reducer.latest_admin_search_parameter,
    };

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({editHotelAdmin:adminActions.editHotelAdmin,adminHotelDelete:adminHotelDelete},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(EditHotelTile);

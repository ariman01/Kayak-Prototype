import React,{ Component } from 'react';
import {connect} from 'react-redux';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';
import BarChart from './../graph/bar_chart';
import PieChart from './../graph/pie_chart';
import LineChart from './../graph/line_chart';

class FlightGraphs extends Component {

getAdminDashBoardGraph(labels, datasets, label_name, header_text){
    if(labels.length >0 && datasets.length >0){
        var data={
          labels: labels,
          datasets:datasets,
          labelName:label_name,
          header_text:header_text
         }
      return (<PieChart data={data}/>)
    }else{
      return (<h2 style={{color:"red"}}> Analysis data not available </h2>)
    }
}

  render() {
    return (
            <div>

                <div className="admin-dashboard-header">
                  <AdminDashboardHeader/>
                </div>

                <br></br>
                <h3 className="hotel-graph-header">Top 10 Airlines in terms of sales</h3>
                <div className="car-graph-1">
                    {this.getAdminDashBoardGraph(this.props.flight_analysis_data[0]['top_ten_carrier_sales'].carriers,this.props.flight_analysis_data[0]['top_ten_carrier_sales'].sales,
                    " Sales Report"," Top 10 Airlines in terms of sales")}
                </div>
                <br></br>
                <h3 className="hotel-graph-header">Top 10 Cities in terms of sales </h3>
                <div className="car-graph-2">
                    {this.getAdminDashBoardGraph(this.props.flight_analysis_data[1]['top_ten_city_sales'].cities,this.props.flight_analysis_data[1]['top_ten_city_sales'].sales,
                    " Sales Report"," Top Cities in terms of sales")}
                </div>

                <br></br>
                <h3 className="hotel-graph-header"> Top 10 Airlines in terms of no. of bookings</h3>
                <div className="car-graph-3">
                    {this.getAdminDashBoardGraph(this.props.flight_analysis_data[2]['top_ten_carrier_bookings'].carriers,this.props.flight_analysis_data[2]['top_ten_carrier_bookings'].bookings,
                    " Sales Report"," Top Airlines in terms of no. of bookings")}
                </div>

            </div>
           );
  }
}



function mapStateToProps(state) {
    console.log("Flight graph mapStateToProps:",state.admin_reducer.flight_analysis_data);
    return {
        flight_analysis_data: state.admin_reducer.flight_analysis_data,
    };

}
export default connect(mapStateToProps,null)(FlightGraphs);

import React,{ Component } from 'react';
import {connect} from 'react-redux';
import AdminDashboardHeader from './../headers/admin_dashboard_header';
import './../../images/admin.css';
import LineChart from './../graph/line_chart';
import PieChart from './../graph/pie_chart';

class UserTraceGraph extends Component {


  getUserTraceGraph(labels, datasets, label_name, header_text){
    if(labels.length >0 && datasets.length >0){
        var data={
          labels: labels.length>1?labels.slice(0,labels.length-1):labels,
          datasets:datasets.length>1?this.getusertraceData(datasets):datasets,
          labelName:label_name,
          header_text:header_text
         }
      return (<LineChart data={data}/>)
    }else{
      return (<h2 style={{color:"red"}}> Analysis data not available </h2>)
    }
}

getusertraceData(dataset){
  let result =[];
  if(dataset.length>1){
    for(var index = 0; index < dataset.length-1;index++){
      result.push(new Date(dataset[index+1]) - new Date(dataset[index]));
    }
  }
  console.log(result);
  return result;
}

  render() {

    return (
            <div>
                <br></br>
                <div className="user-trace-graph">
                    {this.getUserTraceGraph(this.props.user_trace_data.activities, this.props.user_trace_data.timespent, "Trace"," User Trace Diagram" )}
                </div>

            </div>
           );
  }
}


function mapStateToProps(state) {
    console.log("User trace graph mapStateToProps:",state.admin_reducer.user_trace_data);
    return {
        user_trace_data: state.admin_reducer.user_trace_data,
    };

}
export default connect(mapStateToProps,null)(UserTraceGraph);

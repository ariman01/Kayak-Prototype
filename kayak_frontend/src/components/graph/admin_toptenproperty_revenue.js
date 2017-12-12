import React, {Component} from 'react';
import BarChart from './bar_chart';
import LineChart from './line_chart';
import './../stylesheet/graph.css'

class AdminTopTenPropertyRevenue extends Component{
  constructor(){
    super();
    this.data={
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford','Springfield','Mumbai','Delhi','Kolkata'],
      datasets:[
            617594,
            181045,
            153060,
            106519,
            105162,
            9502,
            10162,
            105162,
            1051,
            10512
          ],
        labelName:"Top Revenue",
        header_text:"Top 10 hotel revenue"
    }
  }
  render(){
    return (
      <div className="admin-top-ten-property-revenue">
      <div className="admin-top-ten-property-graph">
      <LineChart data={this.data}/>
      </div>
      <div className="admin-top-ten-property-graph">
      <BarChart data={this.data}/>
      </div>
      <div className="admin-top-ten-property-graph">
      <BarChart data={this.data}/>
      </div>
      </div>
    )
  }
}

export default AdminTopTenPropertyRevenue;

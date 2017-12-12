import React,{ Component } from 'react';
import  _ from "lodash";

import ReactFilterBox, {AutoCompleteOption,SimpleResultProcessing,Expression} from "react-filter-box";



class Demo4 extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOk:true
        }

        this.options = [
            {
                columField: "Name",
                type:"text"
            },
            {
                columField: "Description",
                type:"text"
            },
            {
                columField: "Status",
                type:"selection"
            },
            {
                columnText: "Email @",
                columField: "Email",
                type:"text"
            }
        ];
    }

    onChange(query,result){
        this.setState({isOk:!result.isError})
    }



    render(){
        var rows = this.state.data;
        return <div className="main-container">



            <div className="demo-4-filter-wrapper">
                <div className="demo-4-filter">
                    <ReactFilterBox

                        query={this.state.query}
                        options={this.options}
                    />
                </div>



            </div>

        </div>
    }
}


export default Demo4;

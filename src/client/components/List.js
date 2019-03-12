import React from 'react';
import ReactDOM from 'react-dom';
import Divider from 'muicss/lib/react/divider';
import Panel from 'muicss/lib/react/panel';

//components
import { RemoveBtn } from './Remove.js';

const divStyle = {
  margin: '10px'
};


export class TaskList extends React.Component{

  constructor(props) {
	 super(props);
	 this.state = {
	    tasksList: []
	 };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/getList")
      .then(response => response.json())
      .then(json => {
        this.setState({
          tasksList: json.taskList
        });
      });
  }

  render(){
    return(
      <div style={divStyle}>
    		<Panel>
            <h1>List</h1>
            {this.state.tasksList.map(function(object, i){
                return <div key={i}>{object} <RemoveBtn removeItem={object}/><Divider /></div>;
            })}
    		</Panel>
      </div>
    );
  }
}

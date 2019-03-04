import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import { MdAdd } from 'react-icons/md';

//inline styles
const divStyle = {
  margin: '10px'
};

export class AddForm extends React.Component{
  constructor(props) {
     super(props);
     this.state = {
       inputValue: ""
     };
  }

  handleAdd(evt){
    fetch("http://localhost:3000/api/addTask/"+this.state.inputValue)
      .then(response => response.json())
      .then(json => {
        window.location.reload();
      });
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render(){
    return(
      <div style={divStyle}>
        <Form>
          <h1>New</h1>
          <Input
            type="text"
            name="taksName"
            value={this.state.inputValue}
            onChange={evt => this.updateInputValue(evt)}
            placeholder="Task name here..."
          />
        </Form>
        <Button color="primary" onClick={evt => this.handleAdd(evt)}>Add <MdAdd /></Button>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Panel from 'muicss/lib/react/panel';
import { MdDelete } from 'react-icons/md';

export class RemoveBtn extends React.Component{
  constructor(props) {
     super(props);
  }

  handleAdd(evt){
    fetch("http://localhost:3000/api/removeTask/"+this.props.removeItem)
      .then(response => response.json())
      .then(json => {
        window.location.reload();
      });
  }

  render(){
    return(
        <Button variant="fab" color="danger" onClick={evt => this.handleAdd(evt)}><MdDelete/></Button>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { MdSpa } from 'react-icons/md';

//components
import { AddForm } from './Add.js';
import { TaskList } from './List.js';

const divStyle = {
  padding: '3px',
  fontSize: '50px'
};

export class AppContainer extends React.Component{
  render(){
    return(
		<div>
			<Appbar>
			   <div style={divStyle}><MdSpa /> <span>TODO List</span></div>
			</Appbar>
			<Row>
        <Col md="2"></Col>
			  <Col md="8"><AddForm/></Col>
        <Col md="2"></Col>
      </Row>
      <Row>
      <Col md="2"></Col>
      <Col md="8"><TaskList/></Col>
      <Col md="2"></Col>
      </Row>
		</div>

    );
  }
}

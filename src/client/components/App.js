import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { MdSpa } from 'react-icons/md';

//components
import { AddForm } from './Add.js';
import { TaskList } from './List.js';

export class AppContainer extends React.Component{
  render(){
    return(
		<div>
			<Appbar>
			   <h1><MdSpa /> <span>TODO List</span></h1>
			</Appbar>
			<Row>
			  <Col md="4"><AddForm/></Col>
        <Col md="8">
          <TaskList/>
			  </Col>
      </Row>
		</div>

    );
  }
}

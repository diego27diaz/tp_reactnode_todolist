import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from './components/App.js';

export class MyPage extends React.Component{
  render(){
    return(
		<div>
			<AppContainer />
		</div>
    );
  }
}

render(
  <MyPage/>,
  document.getElementById('app')
);

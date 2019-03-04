import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack-config';

//init packages
const app = express();

//global mockup list
let taskList = ["Task Demo 1", "Task Demo 2", "Task Demo 3"];

//routes
app.get('/api/getList', (req, res) => {
  res.json({'taskList': taskList});
});

app.get('/api/addTask/:task', (req, res) => {
  taskList.push(req.params.task);
  res.json({'response': "OK"});
});

app.get('/api/removeTask/:task', (req, res) => {
  for(var i=0; i<taskList.length; i++) {
		if(taskList[i] == req.params.task) {
			taskList.splice(i, 1);
			break;
		}
	}
  res.json({'response': "OK"});
});

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(webpackDevMiddleware(webpack(webpackConfig)));

//start
app.listen(app.get('port'), () => {
  console.log('server running...');
});

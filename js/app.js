var React = require('react');
import ReactDOM from 'react-dom'; 

var Comments = require('./views/comments');
var CommentForm = require('./views/comment-form');
var CommentActionCreator = require('./actions/comment-action-creators');
var restAPI = require('./rest/consumeRest');

var counter = 0;
function testClick()
{
	counter++;
	CommentActionCreator.createComment('aaaaa' + counter)
}

function callRestCalSalary()
{
	restAPI.calSalary();
}

var App = React.createClass({ 
 
	render: function() {
	return (
	  <div>
		<Comments />
		<CommentForm /> 
		<button onClick={() => testClick()}>New Item</button>  <br /><br />
		<button onClick={() => callRestCalSalary()}>Test Rest API</button>  
	  </div>
	);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));

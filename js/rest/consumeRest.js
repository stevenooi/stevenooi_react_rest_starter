var AppDispatcher = require('../dispatcher/app-dispatcher');
var CommentActionCreator = require('../actions/comment-action-creators');
import axios from 'axios';

module.exports = { 
  
  calSalary: function() { 
    	axios.post('http://localhost:8081/calSalary', {
			firstName: 'Fred',
			lastName: 'Flintstone'
		})
		.then(function (response) {  
			CommentActionCreator.createComment(response.data.payDate) 
		})
		.catch(function (error) {
		console.log(error);
		}); 
  }
};
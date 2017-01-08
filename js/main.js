import React from 'react';
import ReactDOM from 'react-dom'; 
import { Component } from 'react';
var Comments = require('./views/comments');
var CommentForm = require('./views/comment-form');
 
export default class RestProject extends Component {
	
  constructor () {
	super()  
	state = {
		test: "XYZ",
	}
	window.x = "PPP";
  }
  
} 

ReactDOM.render(
        <Comments />, document.getElementById('app'));

var React = require('react');

var CommentStore = require('../stores/comment-store');

function getStateFromStore() { 
  return {
    comments: CommentStore.getAll()
  }
}
var Comments = React.createClass({
  onChange: function() {
    this.setState(getStateFromStore());
  },

  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    CommentStore.addChangeListener(this.onChange);
  },

  componentWillUnmount: function() {
    CommentStore.removeChangeListener(this.onChange);
  },

  render: function() {
	  //alert('In render : ' + this.state.comments);
    var comments = this.state.comments.map(function(comment, index) { 
	//alert('comment(' + index + '):' + comment + ' comment.text:' + comment.text)
      return (
        <div className='comment' key={'comment-' + index}>
          {comment}
        </div>
      )
    });

    return (
      <div className='comments'>
	  Comments : 
        {comments} 
      </div>
    );
  },
});

module.exports = Comments;

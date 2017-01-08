var AppDispatcher = require('../dispatcher/app-dispatcher');
import axios from 'axios';

module.exports = {

  createComment: function(comment) { 
    var action = {
      actionType: "CREATE_COMMENT",
      comment: comment
    };

    AppDispatcher.dispatch(action);
  }
};
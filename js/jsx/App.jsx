import React from 'react';
var Comments = require('./views/comments');

class App extends React.Component {
   render() {
      return (
         <div>
        <Comments />
			{this.props.content}
			AAAAAAAAAAAAAAA
            Hello World!!! CONGRATS
         </div>
      );
   }
}

export default App;
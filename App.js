// jshint ignore: start
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    let text = this.props.text
    return (
      <div>
        <h1>{text}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

App.propTypes = {
  text: React.PropTypes.string,
  count: React.PropTypes.number.isRequired
}

App.defaultProps = {
  text: 'this is the default text'
}

ReactDOM.render(
  <App count={5}/>, document.getElementById('app')
);

//class Component has state
//constant Component does not have state
//react Component can only return a single node, solution: wrap all in a single node
//inside jsx need to interpolate or place in variable

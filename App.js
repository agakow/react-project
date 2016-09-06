// jshint ignore: start
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: 'this is the state text'}
  }
  update(e){
    this.setState({text: e.target.value})
  }
  render(){
    return (
      <div>
      <input type="text"
        onChange={this.update.bind(this)} />
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

// App.propTypes = {
//   text: React.PropTypes.string,
//   count: React.PropTypes.number
// }
//
// App.defaultProps = {
//   text: 'this is the default text'
// }

ReactDOM.render(
  <App />, document.getElementById('app')
);

//class Component has state
//constant Component does not have state
//react Component can only return a single node, solution: wrap all in a single node
//inside jsx need to interpolate or place in variable

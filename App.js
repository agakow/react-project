// jshint ignore: start
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: ''}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({text: e.target.value})
  }
  render(){
    return (
      <div>
        <Widget text={this.state.text} update={this.update} /> //updates the state.text value of the parent component
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
    <input type="text"
      onChange={props.update} />
      <h1>{props.text}</h1>
    </div>
  );
}

ReactDOM.render(
  <App />, document.getElementById('app')
);

//class Component has state
//constant Component does not have state
//react Component can only return a single node, solution: wrap all in a single node
//inside jsx need to interpolate or place in variable
//owner ownee relationship when one Component renders another where the parent Component = composite Component

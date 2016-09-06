// jshint ignore: start
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render(){
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br/>
        <br/>
        <Button>I <Heart/> React</Button>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return <button> {this.props.children} </button>
  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>

class Slider extends React.Component {
  render() {
    return (
      <div>
      <input ref="inp" type="range"
        min="0"
        max="255"
        onChange={this.props.update} />
      </div>
    );
  }
}



ReactDOM.render(
  <App />, document.getElementById('app')
);

//class Component has state
//constant Component does not have state
//react Component can only return a single node, solution: wrap all in a single node
//inside jsx need to interpolate or place in variable
//owner ownee relationship when one Component renders another where the parent Component = composite Component
//refs are a way to reference an instance of a component from within the react app
//refs wont work with stateless components (const)
//access child nodes through this.props.children

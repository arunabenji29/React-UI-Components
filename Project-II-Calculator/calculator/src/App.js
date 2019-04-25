import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import * as math from 'mathjs';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      total:''
    };
  }

  addToinput = event => {
    if(event.target.textContent === '='){
    this.setState({
      total: eval(this.state.total)
    });
  }
  else if(event.target.textContent === 'Clear'){
    this.setState({
      total: ''
    });
  }
  else{
    this.setState({
      
      total: this.state.total + event.target.textContent
    });
    // console.log(event.target.textContent)
    // console.log(this.state.total);
  }
  };

  render(){
    return (
      <div className = "App">
        <CalculatorDisplay propsDisplay = {this.state.total}/>
        <ActionButton handleClick = {this.addToinput} stateProp = {this.state.total}/>
      </div>
    );
  }
}


export default App;

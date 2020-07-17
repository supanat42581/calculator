
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
export default class App extends Component {


state = {
show:""
}

operation = (number)=>{
  this.setState({show: this.state.show + number})
}
plus = ()=>{
  this.setState({show: this.state.show.reduce((item, nextitem) => item + nextitem)})
}


render() {
  return (
      <div className="App">
      
      <h1 className= "show">{this.state.show}</h1>
      <button onClick={()=>this.operation(7)} className="button-num">7</button>
      <button onClick={()=>this.operation(8)} className="button-num">8</button>
      <button onClick={()=>this.operation(9)} className="button-num">9</button>
      <button onClick={()=>this.plus} className="button-sign">+</button>

      <button onClick={()=>this.operation(4)} className="button-num">4</button>
      <button onClick={()=>this.operation(5)} className="button-num">5</button>
      <button onClick={()=>this.operation(6)} className="button-num">6</button>
      <button className="button-sign">-</button>
      
      <button onClick={()=>this.operation(1)}className="button-num">1</button>
      <button onClick={()=>this.operation(2)}className="button-num">2</button>
      <button onClick={()=>this.operation(3)}className="button-num">3</button>
      <button className="button-sign">x</button>
      
      <button onClick={()=>this.operation(0)}className="button-num">0</button>
      <button className="button-sign">C</button>
      <button className="button-sign">CE</button>
      <button className="button-sign">/</button>
      
      <button className="equal">=</button>


      </div>
    )
  }
}

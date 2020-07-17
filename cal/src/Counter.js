import React, { Component } from 'react'

export default class Counter extends Component {

state = {
    showNum:0,
    plusNum:0,
    minusNum:0,
    resetNum:0
}
reset =(e)=>{
    this.setState({resetNum:e.target.value})
}
clear =()=>{
    this.setState({showNum:this.state.resetNum})
}

higher =(e)=>{
    this.setState({plusNum:e.target.value})
}
add =()=>{
    this.setState({showNum:this.state.showNum + Number(this.state.plusNum)})
}

lower =(e)=>{
    this.setState({minusNum:e.target.value})
}
subtract =()=>{
    this.setState({showNum:this.state.showNum - Number(this.state.minusNum)})
}


    render() {
        return (
            <div className="wrapCounter">
                <h1>Counter2</h1>
                <h1>{this.state.showNum}</h1>
                <input onChange={(e)=>this.higher(e)}/>
                <button className="up" onClick={this.add}>Add</button>
                <input onChange={(e)=>this.lower(e)}/>
                <button className="down" onClick={this.subtract}>Subtract</button>
                <input onChange={(e)=>this.reset(e)}/>
                <button className="reset" onClick={this.clear}>Reset</button>
                
            </div>
        )
    }
}

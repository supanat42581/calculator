import React, { Component } from 'react'
import './Colessel.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'

export default class Colossel extends Component {
    state = {
        
        count:0
    }
        forward = ()=>{
            this.setState({count: this.state.count+1})
        }
        backward =()=>{
            this.setState({count: this.state.count-1})
        }
    render() {
        let image= [pic1, pic2, pic3, pic4]
        return (
            <div className="colossel-wrap">
              <div>
                  <button className= "backward" onClick={this.backward}> &lt;</button>    
              </div>
              <div>
                  <img className="disimage" src ={image[(this.state.count%4+4)%4]}></img>
              </div>
              <div>
                  <button className= "forward" onClick={this.forward}> &gt;</button>    
              </div>
              
            </div>
        )
    }
}

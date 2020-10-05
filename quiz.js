import React from 'react';
import './quiz.css'
import {Link} from 'react-router-dom'

class Quiz extends React.Component{
    constructor(props) 
    {
      super();
      this.state = {
          i:0,
          score : 0,
          y:'',
          x:0,
          arr : [
              {
                  question:"what is 2+2",
                  answer : ["1",'2',"3","4"],
                  correct : "4",
              },
              {
                  question : "2*3=?",
                  answer : ["5",'6',"7","8"],
                  correct : "6",
              },
              {
                 question:"what is 2*5+1",
                 answer : ["9",'10',"11","12"],
                  correct : "11",
             },
             {
                 question : "4*4=?",
                 answer : ["13",'14',"15","16"],
                  correct : "16",
             }
          ]
      }
  }
  check1 = ()=>{
      this.setState({y:this.state.arr[this.state.i].answer[0]})  
  }
  check2 = ()=>{
    this.setState({y:this.state.arr[this.state.i].answer[1]})
  }
  
  
  check3 = ()=>{
    this.setState({y:this.state.arr[this.state.i].answer[2]})
  }
  check4 = ()=>{
    this.setState({y:this.state.arr[this.state.i].answer[3]})
  }
  
  nextquestion = ()=>{

    if(this.state.y === this.state.arr[this.state.i].correct)
    {
        this.setState({score : this.state.score +1})
    }
      if(this.state.i > this.state.arr.length-2)
      {
          this.setState({x:this.state.x+1})
          console.log(this.state.score);
      }
      else
      this.setState({i:this.state.i+1})
  }

    render(){
        return(
            
                <div className = "back">
                    <div className = "circle1"></div>
                    <div className = "circle2"></div>
                    <div className = "circle3"></div>
                    <div className = "circle4"></div>
                    <div className = "box">
                        <div>
                            {
                                this.state.x===0?<div className = "question">
                                <h1>{this.state.arr[this.state.i].question}</h1>
                                    <button onClick = {this.check1}>{this.state.arr[this.state.i].answer[0]}</button>
                                    <button onClick = {this.check2}>{this.state.arr[this.state.i].answer[1]}</button><br></br>
                                    <button onClick = {this.check3}>{this.state.arr[this.state.i].answer[2]}</button>
                                    <button onClick = {this.check4}>{this.state.arr[this.state.i].answer[3]}</button><br></br>
                                    <button>Previous</button>
                                    <button onClick = {this.nextquestion}>next</button>
                                </div>
                                :<div>
                                    <p>Congrats you have scored {this.state.score} points</p>
                                    <Link to = "/" ><button>Home</button></Link>
                                    <Link to ="/topics"><button>Topics</button></Link>
                                    </div>
                            }
                        </div>
                        


                        {/* <h1>Topic:subject1</h1>
                        <h1>Question 1</h1>
                        <button></button>
                        <button></button><br></br>
                        <button></button>
                        <button></button> */}
                        {/* <input type = "text"  placeholder = "option 1"  className = "input"></input>
                        <input type = "text"  placeholder = "option 2"  className = "input"></input><br></br>
                        <input type = "text"  placeholder = "option 3"  className = "input"></input>
                        <input type = "text"  placeholder = "option 4"  className = "input"></input><br></br> */}
                        {/* <button>Previous</button>
                        <button>Next</button> */}
                        
                    </div>
                </div>
            
        )
    }
}

export default Quiz;
import React from 'react';
import {Link} from 'react-router-dom'


class Createquiz extends React.Component{
    constructor(props) 
    {
      super();
      this.state = {
          x:0,
        i:0,
          question:[],
          option1:[],
          option2:[],
          option3:[],
          option4:[],
          dquestion:null,
          doption1:null,
          doption2:null,
          doption3:null,
          doption4:null,
          
      }
    }
    handleQuestionchange = (event)=>{
        this.state.question[this.state.i]=event.target.value
        this.setState({dquestion:this.state.question[this.state.i]})
    }
    handleOption1change = (event) =>{
        this.state.option1[this.state.i]=event.target.value
        this.setState({doption1:this.state.option1[this.state.i]})
    }
    handleOption2change = (event) =>{
        this.state.option2[this.state.i]=event.target.value
        this.setState({doption2:this.state.option2[this.state.i]})
    } 
    handleOption3change = (event) =>{
        this.state.option3[this.state.i]=event.target.value
        this.setState({doption3:this.state.option3[this.state.i]})
    } 
    handleOption4change = (event) =>{
        this.state.option4[this.state.i]=event.target.value
        this.setState({doption4:this.state.option4[this.state.i]})
    }
    addQuestion = ()=>{
        this.setState({i:this.state.i+1,
        dquestion:'',
        doption1:'',
        doption2:'',
        doption3:'',
        doption4:'',
        })
        
        console.log(this.state.question[this.state.i],this.state.option1[0]);
    }
    submitQuiz = ()=>{
        this.setState({x:this.state.x+1})
    }
    render(){
        return(
            
            <div>
                    <div className = "back">
                    <div className = "circle1"></div>
                    <div className = "circle2"></div>
                    <div className = "circle3"></div>
                    <div className = "circle4"></div>
                    <div className = "box">
                        
                {
                   this.state.x===0? <div>
                <label>Topic</label>
                <select>
                    <option>React</option>
                    <option>Angular</option>
                    <option>Node</option>
                </select>
                <form className = "createquizform">
                    <h2>Question</h2>
                    <input type = "text"  onChange = {this.handleQuestionchange} value = {this.state.dquestion}></input><br></br><br></br><br></br>
                    {/* <h3>option1</h3> */}
                    <input type = "text" onChange = {this.handleOption1change} value = {this.state.doption1} placeholder = "option1"></input>
                    {/* <h3>option2</h3> */}
                    <input type = "text" onChange = {this.handleOption2change} value = {this.state.doption2} placeholder = "option2"></input><br></br>
                    {/* <h3>option3</h3> */}
                    <input type = "text" onChange = {this.handleOption3change} value = {this.state.doption3} placeholder = "option3"></input>
                    {/* <h3>option4</h3> */}
                    <input type = "text" onChange = {this.handleOption4change} value = {this.state.doption4} placeholder = "option4"></input>
                    
                </form>
                 <h3 onClick ={this.addQuestion} className = "addquestion">Add Question</h3>
                <button onClick={this.submitQuiz}>submit</button>
                        </div>
                        :<div>
                            <p>you have succesfully submitted the quiz</p>
                            <Link to = "/"> <button>Home</button></Link>
                            <Link to = "/topics"><button>Topics</button></Link>
                            </div>
                }
                </div>
                </div>
                </div>
                // <label>Topic</label>
                // <select>
                //     <option>React</option>
                //     <option>Angular</option>
                //     <option>Node</option>
                // </select>
                // <form>
                //     <h2>Question</h2>
                //     <input type = "text"  onChange = {this.handleQuestionchange} value = {this.state.dquestion}></input><br></br>
                //     <h3>option1</h3>
                //     <input type = "text" onChange = {this.handleOption1change}></input><br></br>
                //     <h3>option2</h3>
                //     <input type = "text" onChange = {this.handleOption2change}></input><br></br>
                //     <h3>option3</h3>
                //     <input type = "text" onChange = {this.handleOption3change}></input><br></br>
                //     <h3>option4</h3>
                //     <input type = "text" onChange = {this.handleOption4change}></input><br></br>
                    
                // </form>
                //  <h3 onClick ={this.addQuestion}>Add Question</h3>
                // <button type = "submit">submit</button>
            // </div>
        )
    }
}

export default Createquiz;
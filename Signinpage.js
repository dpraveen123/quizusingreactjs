import React from 'react';
import './quiz.css'
import {Link} from 'react-router-dom'
import Signinimage from './signinquiz1.svg'
// import {Signinpic} from 

class Signin extends React.Component{
constructor(props){
    super(props);
    this.state = {
        i:2
    }
}
    componentDidMount= ()=>{
        
        // console.log(this.props.go[0].username);
    }
    handlerchangeusername = (event)=>{
        this.props.go[this.state.i].username = event.target.value;
        console.log(this.props.go[2].username);
    }
    render(){
        return(
            <div className = "signinbackground">
                
                <div className = "leftpage">
                    <div className = "insideleft">
                        <div className = "signinleftdescription">
                            <h1>Create Account</h1>
                            <input type = "text" placeholder = "First name"></input>
                            <input type = "text" placeholder = "Last name"></input><br></br>
                            <input type = "text" placeholder = "Email Adress" onChange = {this.handlerchangeusername}></input>
                            <input type = "number" placeholder = "Mobile Number"></input><br></br>
                            <input type = "password" placeholder = "Password"></input><br></br>
                            <Link to="/topics"><button>Sign In</button></Link>
                        </div>
                    </div>
                </div>
                <div className = "rightpage">
                    <div className = "insideright">
                        <div className = "signinrightdescription">
                    <h4 >Already a member?</h4>
                    <p>Click the below login button</p>
                    <Link to="/login" ><button>Login</button></Link>
                    <img src = {Signinimage} alt = "sdf" className = "Signinimage"></img>
                    
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Signin
import React from 'react';
import ReactDOM from 'react-dom';
import './quiz.css'
import Icon from './icon.jpg'
import Loginpic from './quizlogin.jpg'
import {Link, Route} from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import Topics from './quiztopics';
import {BrowserRouter as Router , Switch } from 'react-router-dom';
import Signin from './Signinpage';


// import {FaEnvelope} from 'react-icons/fa'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            x:0,
            z:0,
            y:'',
            dusername:'',
            dpassword:'',
            userdetails : [
                {
                username : "dpraveen123@gmail.com",
                password : "123456"
                },
                {
                    username : "dpraveen456@gmail.com",
                    password : "qwerty"
                }
        ]
        }
    }

    handlerchangeusername = (event)=>{
        this.setState({dusername:event.target.value})
    }
    handlerchangepassword = (event)=>{
        this.setState({dpassword:event.target.value})
    }

    checkData = ()=>{
        for(var i=0;i<this.state.userdetails.length;i++)
        {
            
                if(this.state.dusername === this.state.userdetails[i].username && this.state.dpassword === this.state.userdetails[i].password )
                {
                    this.setState({x:1});
                    break;
                }
                if(this.state.x ===0)
                {
                    this.setState({y:"Invalid username or password"})
                }
        }
        
    }
    createAccount = ()=>{
        this.setState({z:1})
    }

    render(){
        return(
            <Router>
            
                    <div>
                        {
                            this.state.x === 1 ? 
                            
                                <Switch>
                            <Route path = "/topics" exact component = {Topics}/>
                            </Switch>
                            
                            :

                            <div>
                                {
                                    this.state.z ===1?<Route path = "/signin" exact  ><Signin go = {this.state.userdetails}/></Route>
                                    :
                               
                            
                            <div className = "loginpage">
                           
                            

                            <img src ={Icon} alt = "icon" className = "loginpageicon"></img>
                            <img src = {Loginpic} className = "loginpageimage"></img>
                            <div className = "loginpageuserdetails">
                                <h1>Welcome Back :)</h1>
                                <p>To keep connectedwith us please login with your personal</p>
                                <p>information by email address and password</p>
                                <form className = "loginpageinput">
                                <h3>Username:</h3>
                                <input type = "text" placeholder = "📧email or username" onChange = {this.handlerchangeusername}></input><br></br>
                                <h3>Password:</h3>
                                <input type = "password" placeholder = "🔐Password" onChange = {this.handlerchangepassword}></input><br></br>
                                <p className = "invaliduserdetails">{this.state.y}</p>
                                <input type="checkbox"></input><span className = 'loginspan'>Remember me</span>
                                <p className = "loginforgot">forgot password?</p>
                                <Link to = "/topics"><button className = "loginpageloginbtn" onClick = {this.checkData}>Login</button></Link>
                                <Link to = '/signin'> <button className = "loginpagecrtacntbtn" onClick = {this.createAccount} >Create Account</button></Link>
                                </form>
                                <h3>Or you can join with</h3>
                                <div className = "loginpageicons">
                                <FaGoogle />
                                <FaFacebook />
                                <FaTwitter />
                                </div>
                                </div>
                                </div>
                                 }
                                </div>
                        }
                    
                
                {/* <button className = "loginbutton">Login</button> */}
                {/* <form>
                <input type = "text" placeholder = "username"></input><br></br><br></br>
                <input type = "text" placeholder = "password"></input><br></br><br></br>
                <button className = "Loginbutton">Login</button>
                 <button className = "Siginbutton">Signin</button>
                 </form> */}
                
            </div>
            </Router>
        )
    }
}

export default Login;
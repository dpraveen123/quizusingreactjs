import React from 'react';
import './quiz.css'
import Icon from './icon.jpg'
import homepage from './homepage2.png'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';




class Homepage extends React.Component{
    render(){
        return(
            <div className = "HomepageBackground">
                <ul className = "nav-links">
                    <li><img src ={Icon} alt = "icon" className = "homepageicon"></img></li>
                    <div className = "nav-links1">
                        <Link to = '/'><li>Home</li></Link>
                        <Link to = '/topics'><li>Topics</li></Link>
                        <li>About</li>
                        
                        <Link to = '/login'><button className = "homepageloginbt">Login</button></Link>
                    </div>
                </ul>
                <img src = {homepage} className = "homepage"></img>
               <div className = "homepagedescription">
                   <h1 className = "homepageh1">Let's</h1>
                   <h1>Have a fun time!</h1>
                   <p>Multiply the excitement in our quiz with sum-thing special</p>
                   <p>Here is a little quiz to get you focused.</p>
                  <Link to = '/signin'> <button className = "homepagebutton">Start Quiz</button></Link>
               </div>
            </div>
        )
    }
}

export default Homepage;
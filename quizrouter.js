import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.js'
import Homepage from './homepage'
import Landpage from './landpage'
import Signin from './Signinpage';
import Topics from './quiztopics';
import Quiz from './quiz'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Createquiz from './createquiz.js';

class Quizrouter extends React.Component{
    render(){
        return(
<Router>
{/* <Homepage /> */}
    
      <Switch>
        <Route path = "/login" exact component = {Login}/>
        <Route path = "/" exact component = {Homepage}/>
        <Route path = "/homepage" exact component = {Homepage}/>
        <Route path = "/landpage" exact component = {Landpage}/>
        <Route path = "/signin" exact component = {Signin}/>
        <Route path = "/topics" exact component = {Topics}/>
        <Route path = "/quiz" exact component = {Quiz}/>
        <Route path = "/createquiz" exact component = {Createquiz}/>

      </Switch>
    </Router>
        )
    }
    
}

export default Quizrouter;
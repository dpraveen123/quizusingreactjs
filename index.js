import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './quiz'
import Phonetime from './phonetime' 
import Testquiz from './testquiz'
import Login from './login.js'
import Homepage from './homepage'
import Landpage from './landpage'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Signin from './Signinpage';
import Topics from './quiztopics';
import Quizrouter from './quizrouter';
import Createquiz from './createquiz';


ReactDOM.render(
  <React.StrictMode>
    {/* <Topics /> */}
    {/* <Signin /> */}
    {/* <Homepage /> */}
   {/* <Testquiz /> */}
   {/* <Landpage /> */}
    {/* <Phonetime /> */}
    {/* <Login /> */}
    {/* <Quiz /> */}
    <Quizrouter />
    {/* <Createquiz /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

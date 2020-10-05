import React from 'react';
import icon from './icon.jpg'
import {Link} from 'react-router-dom'
class Topics extends React.Component{
    render(){
        return(
            <div className = "Topicsbackground">
                <h1>Quiz Topics</h1>
                <div>
                <div class="row">
                <Link to = '/quiz'><div class="column">
    <div class="card">
        <img src={icon} height ="50px"></img>
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div></Link>

  <div class="column">
    <div class="card">
    <img src={icon} height ="50px"></img>

      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={icon} height ="50px"></img>

      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={icon} height ="50px"></img>

      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  </div>
</div>
<div className="downtopics">
<div class="row">
  <div class="column">
    <div class="card">
    <img src={icon} height ="50px"></img>

      <h3>Card 5</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src={icon} height ="50px"></img>

      <h3>Card 6</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={icon} height ="50px"></img>

      <h3>Card 7</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img src={icon} height ="50px"></img>

      <h3>Card 8</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
<Link to = '/createquiz'>   <h2>Create Your own Quiz</h2></Link>
</div>

            </div>
        )
    }
}

export default Topics;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
    <SayFullName name="Mary" surname="Fedorova" link="vk.com"/>
    <SayFullName name="Serj" surname="Fedorova" link="facebook.com"/>
    <SayFullName name="Helen" surname="Fedorova" link="#"/>
    </div>  

    );
  }
}

function SayFullName(props)
{
  return(
  <div>
  <h1> Мое имя {props.name}, фамилия - {props.surname}</h1>
  <a href={props.link}>ссылка на мой профиль</a>
  </div>
  )
}

export default App;

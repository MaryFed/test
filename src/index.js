import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello(){
	let phrase = "World"
	return (
		<h1> Hello {phrase}</h1>
		)
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
function MeetAll()
{
	return(
		<div>
		<SayFullName name="Mary" surname="Fedorova" link="vk.com"/>
		<SayFullName name="Serj" surname="Fedorova" link="facebook.com"/>
		<SayFullName name="Helen" surname="Fedorova" link="#"/>
		</div>
	)
}

ReactDOM.render(<MeetAll />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

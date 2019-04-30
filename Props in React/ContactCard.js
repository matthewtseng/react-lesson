import React from "react"

// All initially have hard-coded properties, so we have to make it dynamic

/*
Code for using only props:

function ContactCard(props) {
	return (
		<div className="contact-card">
			<img src={props.imgUrl}/>
			<h3>{props.name}</h3>
			<p>Phone: {props.phone}</p>
			<p>Email: {props.email}</p>
		</div>
	)
}
*/

function ContactCard(props) {
	return (
		<div className="contact-card">
			<img src={props.contact.imgUrl}/>
			<h3>{props.contact.name}</h3>
			<p>Phone: {props.contact.phone}</p>
			<p>Email: {props.contact.email}</p>
		</div>
	)
}

export default ContactCard
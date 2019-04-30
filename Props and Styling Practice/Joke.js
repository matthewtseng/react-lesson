import React from "react"

function Joke(props) {
	return (
		<div className="joke">
			<p>Question: {props.question}</p>
			<p>Punch Line: {props.punchLine}</p>
		</div>
	)
}

export default Joke
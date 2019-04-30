// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
  // 1. A Navbar component
  // 2. A MainContent component
  // 3. A Footer component

// Will create a file hierarchy of this
//				index.js
//					|
//				  App.js
//			/		|		\
//	 Header.js MainContent.js Footer.js
// 
// All files that are below a file will need to be exported
// and will be imported by the one above.

import React from "react"
import ReactDOM from "react-dom"
// Do not necessarily have to put App.js 
import App from "./App"

ReactDOM.render(<App />, document.GetElementById("root"))
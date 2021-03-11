import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

	 handleClick=()=>{
		
	}
    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={()=><p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
</p>}>Add Para</button>
				{ /* Do not remove this main div!! */ }
    		</div>
    	);
    }
}


export default App;


import React, {Component, useState} from "react";

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			isVisible:false
		}
	};

	 handleClick=()=>{
		this.setState({
      isVisible:true
		})
	}
    render() {
    	return(
    		<div id="main">
				<button id="click" onClick={this.handleClick}>Show Text</button>
				{
					this.state.isVisible && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
				}
    		</div>
    	);
    }
}




export default App;

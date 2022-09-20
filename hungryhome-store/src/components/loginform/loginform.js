import React from 'react'
import "./loginform.css"
import Signup from './signup'
import Signin from './signin'
import Overlay from './overlay'

// import './index'
export default function loginform() {
	  const signUpButton = () => {
		  document.getElementById('container').classList.add('right-panel-active');
	 };  
	 const signInButton = () => {
		document.getElementById('container').classList.remove('right-panel-active');
	 };

	

  return (<>
<h2>Hungry Home Store</h2>
<div className="container" id="container">
	<Signin />
	<Signup />
	<Overlay signInButton={signInButton} signUpButton={signUpButton} />
</div>
</>

  )
}

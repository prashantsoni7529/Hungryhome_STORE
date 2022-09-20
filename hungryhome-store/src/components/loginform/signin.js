import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const signin = () => {
  return (
    <div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div className="social-container">
				<a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
				<a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
				<a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button >Sign In</button>
		</form>
	</div>
  )
}

export default signin
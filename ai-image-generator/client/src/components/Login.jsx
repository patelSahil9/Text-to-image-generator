import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './login.css';


function Login() {
	useEffect(() => {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add("right-panel-active");
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove("right-panel-active");
		});
	}, []);

	return (
		<>
		<div className='h-screen w-screen pt-16 top-0  fixed z-50 bg-white'>
			{/* <Link to="/">
				<div className='flex items-center'>
					<button className="text-x font-bold py-2 px-4 rounded-full bg-gray-500 ml-10 hover:bg-gray-200 transition-all duration-300">&larr; Back</button>
				</div>
			</Link> */}
			<div className="container mt-11" id="container">
				<div className="form-container sign-up-container">
					<form action="#">
						<h1>Create Account</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your email for registration</span>
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<button>Sign Up</button>
					</form>
				</div>
				<div className="form-container sign-in-container">
					<form action="#">
						<h1>Sign in</h1>
						<div className="social-container">
							<a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
							<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
							<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your account</span>
						<input type="email" placeholder="Email" />
						<input type="password" placeholder="Password" />
						<a href="#">Forgot your password?</a>
						<button>Sign In</button>
					</form>
				</div>
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button className="ghost" id="signIn">Sign In</button>
						</div>
						<div className="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button className="ghost" id="signUp">Sign Up</button>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<h1 className='text-4xl justify-center text-center mb-10'>SignIn/SignUp</h1>
			</footer>
			</div>
		</>
	);
}

export default Login;


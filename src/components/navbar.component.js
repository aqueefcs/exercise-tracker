import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render(){
		return(
				<nav className ="navbar navbar-dark bg-dark navbar-expand-lg">
					<Link to="/" className="navbar-brand p-2">ExerTracker</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    	<span className="navbar-toggler-icon"></span>
				  	</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto p-2">
							<li className="navbar-item">
								<Link to="/" className="nav-link">Exercise</Link>
							</li>
							<li className="navbar-item">
								<Link to="/create" className="nav-link">Create Exercise Log</Link>
							</li>
							
							<li className="navbar-item">
								<Link to="/user" className="nav-link">Create User</Link>
							</li>
						</ul>
					</div>
				</nav>

			)

	}
}
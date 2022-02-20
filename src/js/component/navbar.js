import React, {useState, useEffect} from "react";
import {FaHtml5 } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Button } from "./button";
import './navbar.css';


export const Navbar = () => {
	const[click, setClick]=useState(false);
	const [button, setButton]=useState(true);

	const handleClick= () => setClick (!click);
	const closeMobileMenu= () => setClick(false);

	const showButton=()=>{
		if(window.innerWidth<=960){
			setButton(false)
		}else{
			setButton(true)
		}
	};


useEffect(()=>{
	showButton()
},[]);

	window.addEventListener('resize', showButton);

	return (
		
		<nav>

		<div className="navbar-container">
			<Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
			   <i className="fa-light fa-jedi"></i>
			</Link>
			<div className="menu-icon" onClick={handleClick}>
				<i className={click ?'fa fa-times': 'fa fa-bars'}/>	
			</div>
				<ul className={click ?'nav-menu active':'nav-menu'}>
					<li className="nav-item">
					<Link to='/' className="nav-links" onClick={closeMobileMenu}>
							HOME
					</Link>
					</li>
					<li className="nav-item">
					<Link to='/Characters' className="nav-links" onClick={closeMobileMenu}>
							Characters
					</Link>
					</li>
					<li className="nav-item">
					<Link to='/Planets'className="nav-links" onClick={closeMobileMenu}>
							Planets
					</Link>
					</li>
					<li className="nav-item">
					<Link to='/Films'className="nav-links" onClick={closeMobileMenu}>
							Films
					</Link>
					</li>
					<li className="nav-item">
					<Link to='/Species'className="nav-links" onClick={closeMobileMenu}>
							Species
					</Link>
					</li>
					<li className="nav-item">
					<Link to='/Vehicles'className="nav-links" onClick={closeMobileMenu}>
							Vehicles
					</Link>
					</li>
					<li className="nav-item">
					<Link to='/Starships'className="nav-links" onClick={closeMobileMenu}>
							Starships
					</Link>
					</li>
				</ul>
				{button &&<Button buttonStyle='btn--outline'>The Force</Button>}
		</div>

		</nav>
		
		
	);
};

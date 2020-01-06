import React from "react";
import { Link } from "react-router-dom";
import "./Header.module.scss";
export default function Header() {
	return (
		<nav>
			<div className='link'>
				<Link to='/'>Home</Link>
				<Link to='/bio'>Biography</Link>
				<Link to='/power'>Strength & Power</Link>
				<Link to='/images'>Images</Link>
			</div>
		</nav>
	);
}

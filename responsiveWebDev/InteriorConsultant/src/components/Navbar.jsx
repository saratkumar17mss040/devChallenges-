import { useState } from 'react';
import './Navbar.css';

export function Navbar() {

	const [isHamMenuCollapsed, setHamMenuCollapsed] = useState(false);


	function toggleOverlay() {
		if (isHamMenuCollapsed) {
			setHamMenuCollapsed(false);
		} else {
			setHamMenuCollapsed(true);
		}
	}

	function HamOrCloseIcon() {
		if (isHamMenuCollapsed) {
			return (
				<div>
					<div className="overlay">
						<div onClick={toggleOverlay} className="closeIcon"></div>
						<div className="overlayContent">
							<a href="#home">Home</a>
							<a href="#collection">Collection</a>
							<a href="#about">About</a>
							<a href="#contact">Contact</a>
						</div>
					</div>
				</div>
			);
		}
		return (
			<div>
				<div className="hamBurgerIcon"></div>
				<div className="hamBurgerIcon"></div>
				<div className="hamBurgerIcon"></div>
			</div>
		);
	}

	return (
		<nav className="navbar">
			<span className="navBrand">
				<a href="#">This Interior</a>
			</span>
			<ul className="navList">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#collection">Collection</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<div
					onClick={toggleOverlay}
					className={!isHamMenuCollapsed ? 'hamBurgerIconWrapper' : ''}
				>
					{/* <div className="hamBurgerIcon"></div>
					<div className="hamBurgerIcon"></div>
					<div className="hamBurgerIcon"></div> */}
					<HamOrCloseIcon />
				</div>
				{/* <div className={isHamMenuCollapsed ? 'overlay' : ''}></div> */}
			</ul>
		</nav>
	);
	
}

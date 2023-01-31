import './Navbar.css';

export default function Navbar() {
	return (
		<nav id="home-page-nav">
			<div className="brand-name">
				<strong>Edie</strong>
			</div>
			<ul className="home-page-nav-ul">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#service">Services</a>
				</li>
				<li>
					<a href="#ourworks">Our Works</a>
				</li>
				<li>
					<a href="#clients">Clients</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
				<div className="ham-mobile-icon">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</ul>
		</nav>
	);
}

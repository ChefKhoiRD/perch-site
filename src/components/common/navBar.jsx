import React from "react";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../../public/assets/logo.png';

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-logo">
						<Image 
							src={logo}
							alt='logo'
							width='100'
							height='45'
						/>
					</div>
					
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/">Home</Link>
							</li>
							<li
								className={
									active === "impact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/impact">Impact</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/about">About</Link>
							</li>
							<li
								className={
									active === "news"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/news">News</Link>
							</li>

							<li className={
									active === "invest"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/invest">Invest</Link>
							</li>

							<li className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
	);
};

export default NavBar;

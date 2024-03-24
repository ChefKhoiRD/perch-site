"use client";

import React, {useState} from "react";
import Link from "next/link";
import Image from 'next/image';

import logo from '../../../../public/assets/logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-logo">
						<Link href="/">
							<Image 
								src={logo}
								alt='logo'
								width='100'
								height='45'
							/>
						</Link>
					</div>
					
					<div className="nav-background d-none d-md-block">
						<ul className="nav-list">
							<li
								className={
									active === "impact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/pages/impact">Impact</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/pages/about">About</Link>
							</li>
							<li
								className={
									active === "news"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/pages/news">News</Link>
							</li>

							<li className={
									active === "invest"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/pages/invest">Invest</Link>
							</li>

							<li className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link href="/pages/contact">Contact</Link>
							</li>
						</ul>
					</div>
					<div onClick={handleNav} className="mobile-nav-menu d-flex d-md-none" role="button">
						<FontAwesomeIcon 
							icon={faBars} 
							className="navbar-icon"
						/>
					</div>
					<div className={nav ? "position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" : 'd-block d-md-none d-sm-none'}>
						<div className={nav ? "small-medium-menu position-fixed left-0 top-0 start-0 w-75 w-sm-60 w-md-45 w-lg-35 h-100 bg-light p-10"
											: "small-medium-menu position-fixed left-[-100] top-0 p-10"}>
							<div className="p-5">
								<div className="d-flex w-100 align-items-center justify-content-between">
									<Image 
										src={logo}
										alt='logo'
										width='100'
										height='45'
									/>
									<div onClick={handleNav} role="button">
										<FontAwesomeIcon 
											icon={faX} 
											className="navbar-icon"
										/>
									</div>
								</div>
								<div className="py-4 d-flex flex-column">
									<ul className="mobile-nav text-uppercase">
										
										<li className= {active === "home"
											? "nav-item-mobile active"
											: "nav-item-mobile"}>	
											<Link href='/'> Home </Link>
										</li>

										<li className= {active === "impact"
											? "nav-item-mobile active"
											: "nav-item-mobile"}>	
											<Link href='/pages/impact'> Impact </Link>
										</li>

										<li className= {active === "about"
											? "nav-item-mobile active"
											: "nav-item-mobile"}>	
											<Link href='/pages/about'> About </Link>
										</li>

										<li className= {active === "news"
											? "nav-item-mobile active"
											: "nav-item-mobile"}>	
											<Link href='/pages/news'> News </Link>
										</li>

										<li className= {active === "invest"
											? "nav-item-mobile active"
											: "nav-item-mobile"}>	
											<Link href='/pages/invest'> Invest </Link>
										</li>

										<li className= {active === "contact"
											? "nav-item-mobile active"
											: "nav-item-mobile"}>	
											<Link href='/pages/contact'> Contact </Link>
										</li>
									
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
	);
};

export default NavBar;

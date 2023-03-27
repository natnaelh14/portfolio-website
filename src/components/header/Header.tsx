import React, { useState } from "react";
import "./header.css";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoImage from "./logo.png";
import Resume from "assets/resume.pdf";
import SoundBar from "../SoundBar/SoundBar";
import { OutlineLink, Link } from "../Styled-Components/Links";

const Header = () => {
	const [showNav, setShowNav] = useState<boolean>(false);
	return (
		<nav className="navbar navbar-background ">
			<div className="navbar-main">
				<a href="#about">
					<img className="navbar-logo" src={LogoImage} alt="logo" />
				</a>
				<SoundBar />
				<ul className="navbar-list-desktop">
					<li>
						<Link href="#about">About</Link>
					</li>
					<li>
						<Link href="#projects">Projects</Link>
					</li>
					<li>
						{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
						<Link href={Resume} target="_blank" rel="noopener noreferrer">
							Resume
						</Link>
					</li>
					<li>
						<OutlineLink href="#contact">Contact</OutlineLink>
					</li>
				</ul>
				<span className="navbar-mobile-icon" onClick={() => setShowNav((prev) => !prev)}>
					{showNav ? <HiOutlineX /> : <HiMenuAlt3 />}
				</span>
				<ul className={showNav ? "navbar-list-mobile navbar-list-mobileShow" : "navbar-list-mobile"}>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
						<a href={Resume}>Resume</a>
					</li>
					<li>
						<OutlineLink href="#contact">Contact</OutlineLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;

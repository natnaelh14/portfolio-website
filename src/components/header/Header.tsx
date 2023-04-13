import "./header.css";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoImage from "./logo.png";
import Resume from "assets/resume.pdf";
import SoundBar from "../SoundBar/SoundBar";
import { OutlineLink, Link } from "../Styled-Components/Links";
import { Menu } from "@headlessui/react";

const Header = () => {
	return (
		<nav className="navbar">
			<a href="#intro">
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
			<Menu>
				{({ open }) => (
					<>
						<span className="navbar-mobile-icon">
							<Menu.Button>{open ? <HiOutlineX /> : <HiMenuAlt3 />}</Menu.Button>
						</span>
						<Menu.Items>
							<ul className={open ? "navbar-list-mobile navbar-list-mobileShow" : "navbar-list-mobile"}>
								<Menu.Item>
									<li>
										<a href="#about">About</a>
									</li>
								</Menu.Item>
								<Menu.Item>
									<li>
										<a href="#projects">Projects</a>
									</li>
								</Menu.Item>
								<Menu.Item>
									<li>
										{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
										<a href={Resume}>Resume</a>
									</li>
								</Menu.Item>
								<Menu.Item>
									<li>
										<a href="#contact">Contact</a>
									</li>
								</Menu.Item>
							</ul>
						</Menu.Items>
					</>
				)}
			</Menu>
		</nav>
	);
};

export default Header;

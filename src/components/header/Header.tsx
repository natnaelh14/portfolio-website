import "./header.css";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoImage from "assets/images/logo.png";
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
						<div className="navbar-mobile-icon">
							<Menu.Button as={"span"}>{open ? <HiOutlineX /> : <HiMenuAlt3 />}</Menu.Button>
						</div>
						<Menu.Items
							as={"div"}
							className={
								open ? "navbar-list-mobile navbar-list-mobileShow" : "navbar-list-mobile navbar-list-mobileShow"
							}
						>
							<Menu.Item>
								<a href="#about">About</a>
							</Menu.Item>
							<Menu.Item>
								<a href="#projects">Projects</a>
							</Menu.Item>
							<Menu.Item>
								{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
								<a href={Resume} target="_blank" rel="noopener noreferrer">
									Resume
								</a>
							</Menu.Item>
							<Menu.Item>
								<a href="#contact">Contact</a>
							</Menu.Item>
						</Menu.Items>
					</>
				)}
			</Menu>
		</nav>
	);
};

export default Header;

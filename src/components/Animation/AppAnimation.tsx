import React from "react";
import Zoom from "react-reveal/Zoom";
import "./AppAnimation.css";
import Logo from "images/logo.png";

const AppAnimation = () => {
	return (
		<div className="app__loader">
			<div className="app__imageParent">
				<svg height="130" width="130" className="app__loaderSvg">
					<polygon points="55 3,105 30,105 87,55 120,3 87,3 30" className="app__loaderSvgHex" />
				</svg>
				<Zoom>
					<div className="app__loaderImageParent">
						<img className="app__loaderImage" src={Logo} alt="website logo" />
					</div>
				</Zoom>
			</div>
		</div>
	);
};

export default AppAnimation;

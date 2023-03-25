import React from "react";
import "./trigger.css";

interface TriggerButtonProps {
	triggerText: string;
	buttonRef: any;
	showModal: any;
}
const TriggerButton = ({ triggerText, buttonRef, showModal }: TriggerButtonProps) => {
	return (
		<div className="buttonWrapper">
			{/* <button className="intro-aboutLink" ref={buttonRef} onClick={showModal}>
				{triggerText}
			</button> */}
		</div>
	);
};

export default TriggerButton;

import { useRef, useState } from "react";
import styled, { ExecutionContext, keyframes } from "styled-components";

import music from "../../assets/audio/u-said-it-v13-1167.mp3";
import { FastOmit } from "styled-components/dist/types";

const Box = styled.div`
	display: flex;
	cursor: pointer;

	& > *:nth-child(1) {
		animation-delay: 0.2s;
	}
	& > *:nth-child(2) {
		animation-delay: 0.3s;
	}
	& > *:nth-child(3) {
		animation-delay: 0.4s;
	}
	& > *:nth-child(4) {
		animation-delay: 0.5s;
	}
	& > *:nth-child(5) {
		animation-delay: 0.8s;
	}
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;

const Line = styled.span`
	background: ${(props) => props.theme.text};
	border: 1px solid #e64861 ${(props) => props.theme.body};
	animation: ${play} 1s ease infinite;
	//ts-ignore-next-line
	animation-play-state: ${(
		props: ExecutionContext &
			FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>,
	) =>
		// @ts-ignore
		props.click ? "running" : "paused"};
	height: 1rem;
	width: 2px;
	margin: 0 0.1rem;
`;

const SoundBar = () => {
	const ref = useRef<HTMLAudioElement>(null);
	const [click, setClick] = useState(false);

	const handleClick = () => {
		if (!ref.current) return;
		setClick(!click);

		if (!click) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	};
	return (
		<Box onClick={() => handleClick()}>
			<Line click={click} />
			<Line click={click} />
			<Line click={click} />
			<Line click={click} />
			<Line click={click} />
			<audio src={music} ref={ref} loop>
				<track kind="captions" srcLang="en" label="background_music" />
			</audio>
		</Box>
	);
};

export default SoundBar;

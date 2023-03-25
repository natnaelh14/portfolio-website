import styled from "styled-components";

export const Link = styled.a`
	color: #bdbdb0;
	margin: 40px;
	font-size: 1.4rem;
	height: 60px;
	text-decoration: none;
	&:hover {
		color: #e64861;
		text-decoration: underline;
		text-underline-offset: 10px;
		text-decoration-thickness: 4px;
		text-decoration-color: #e64861;
	}
`;

export const OutlineLink = styled.a`
	color: #e64861;
	border: 2px solid #e64861;
	border-radius: 4px;
	font-size: 1.4rem;
	font-weight: 400;
	text-decoration: none;
	padding: 10px 15px;
	max-width: 170px;
	text-align: center;
	margin: 40px;
	transition: 0.3s;
	&:hover {
		background: rgba(24, 186, 189, 0.1);
		color: #e64861;
		cursor: pointer;
	}
`;

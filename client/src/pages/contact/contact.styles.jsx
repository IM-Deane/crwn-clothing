import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/crown.svg";

export const ContactContainer = styled.main`
	width: 960px;
	height: 600px;

	margin: 0 auto;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 1200px) {
		width: 600px;
		height: 400px;
		margin-top: 160px;
	}

	@media screen and (max-width: 800px) {
		width: 100%;
		height: 400px;
		padding: 0 30px;
	}
`;

export const ContactForm = styled.form`
	border: 2px solid black;
	border-radius: 4px;
	width: 600px;

	margin: 0 auto;
	padding: 25px 45px;
	text-align: center;

	@media screen and (max-width: 620px) {
		width: 80%;
		padding: 0 30px;
	}
`;

export const ContactFormHeader = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContactTitle = styled.h1`
	font-size: 28px;
`;

export const ContactSubtitle = styled.h2`
	font-size: 20px;
	color: black;
`;

export const LogoContainer = styled.div`
	width: 110px;
	padding: 25px;

	@media screen and (max-width: 500px) {
		width: 55px;
		padding: 0;
		display: none;
	}
`;

export const CrwnLogo = styled(Logo)`
	width: 100%;
	height: auto;
`;

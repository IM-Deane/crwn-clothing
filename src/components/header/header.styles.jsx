import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	margin-bottom: 25px;
`;

// Wrap container around the custom Link component
export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const OptionContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

// Share the above styles to Link component
export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

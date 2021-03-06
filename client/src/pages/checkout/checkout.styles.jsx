import styled from "styled-components";

import { Link } from "react-router-dom";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

export const CheckoutPageContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	// Remove block (doesn't need as much space)
	&:last-child {
		width: 8%;
	}
`;

export const StripeButton = styled(StripeCheckoutButton)`
	margin-left: auto;
	margin-top: 50px;
`;

export const TotalContainer = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;

export const TestWarningContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 24px;
	color: red;
	margin-bottom: 20px;
`;

export const EmptyCartContainer = styled.div`
	margin: 20px auto;
`;

export const CartEmptyHeader = styled.h1`
	font-size: 22px;
	font-weight: normal;

	@media screen and (max-width: 600px) {
		font-size: 16px;
	}
`;

export const CollectionsLink = styled(Link)`
	font-size: 20px;
	color: #000;
	text-decoration: underline;

	&:hover {
		cursor-pointer;
	}

	@media screen and (max-width: 600px) {
		font-size: 16px;
	}
`;

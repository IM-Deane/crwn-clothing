import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
	CheckoutPageContainer,
	CheckoutHeader,
	HeaderBlock,
	StripeButton,
	TotalContainer,
	TestWarningContainer,
} from "./checkout.styles";

const headers = [
	{ title: "Product" },
	{ title: "Description" },
	{ title: "Quantity" },
	{ title: "Price" },
	{ title: "Remove" },
];

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeader>
			{headers.map(({ title }) => (
				<HeaderBlock>
					<span>{title}</span>
				</HeaderBlock>
			))}
		</CheckoutHeader>
		{/* Display items in cart */}
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}

		<TotalContainer>
			<span>Total: ${total}</span>
		</TotalContainer>
		<TestWarningContainer>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - EXP: 07/24 - CVC: 123
		</TestWarningContainer>
		<StripeButton price={total} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

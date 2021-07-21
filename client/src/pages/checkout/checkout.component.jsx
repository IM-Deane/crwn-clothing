import React, { useEffect } from "react";

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
	EmptyCartContainer,
	CartEmptyHeader,
	CollectionsLink,
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

const CheckoutPage = ({ cartItems, total }) => {
	useEffect(() => {
		document.title = "Checkout | CRWN Clothing";
	}, []);

	return (
		<CheckoutPageContainer>
			<CheckoutHeader>
				{headers.map(({ title }, idx) => (
					<HeaderBlock key={idx}>
						<span>{title}</span>
					</HeaderBlock>
				))}
			</CheckoutHeader>
			{/* Display items in cart */}
			{cartItems.length > 0 ? (
				cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))
			) : (
				<EmptyCartContainer>
					<CartEmptyHeader>Your cart is currently empty.</CartEmptyHeader>
					<CollectionsLink to="/shop">
						View our latest collections.
					</CollectionsLink>
				</EmptyCartContainer>
			)}

			<TotalContainer>
				<span>Total: ${total}</span>
			</TotalContainer>
			{cartItems.length > 0 && (
				<>
					<TestWarningContainer>
						*Please use the following test credit card for payments*
						<br />
						4242 4242 4242 4242 - EXP: 07/24 - CVC: 123
					</TestWarningContainer>
					<StripeButton price={total} />
				</>
			)}
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

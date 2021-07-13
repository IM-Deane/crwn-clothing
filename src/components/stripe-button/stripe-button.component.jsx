import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
	console.log(token);
	alert("Payment Successful!");
};

const StripeCheckoutButton = ({ price }) => {
	// Note: stripe wants the price in cents
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JCpYoIeFNhE9u8z0Dak87VfPbgqAr2aj1bZxeLMkaSa9xzMJQWafwNQHY0dOxeNbVDZh85kAXXH6fEYJFKZ5WB6004V33hqPh";

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

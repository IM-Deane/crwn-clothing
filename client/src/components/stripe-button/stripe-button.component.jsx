import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	// Note: stripe wants the price in cents
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JCpYoIeFNhE9u8z0Dak87VfPbgqAr2aj1bZxeLMkaSa9xzMJQWafwNQHY0dOxeNbVDZh85kAXXH6fEYJFKZ5WB6004V33hqPh";

	const onToken = (token) => {
		axios({
			url: "payment",
			method: "POST",
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((res) => {
				alert("Payment successful!");
			})
			.catch((err) => {
				console.log(`Payment error: ${JSON.parse(err)}`);
				alert(
					"There was an issue with your payment. Please make sure you used the provided credit card below."
				);
			});
	};

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

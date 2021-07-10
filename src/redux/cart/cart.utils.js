export const addItemToCart = (cartItems, cartItemToAdd) => {
	// Check if item exists in cart already

	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			// If cart item already exists, increment its quantity value
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	// If item not in cart, add to cart with quantity of 1
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

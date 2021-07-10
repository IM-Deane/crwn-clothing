import { createSelector } from "reselect";

// Get the entire cart state
const selectCart = (state) => state.cart;

// Memoized selector
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		// Will add all cart item quantity values
		cartItems.reduce(
			(accumulatedQuanity, cartItem) => accumulatedQuanity + cartItem.quantity,
			0
		)
);

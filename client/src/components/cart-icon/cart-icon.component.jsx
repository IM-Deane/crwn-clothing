import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
	CartIconContainer,
	ShoppingIcon,
	ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<CartIconContainer onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<ItemCountContainer>{itemCount}</ItemCountContainer>
	</CartIconContainer>
);

const mapToStateProps = createStructuredSelector({
	// Pass cart state into reducer
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapToStateProps, mapDispatchToProps)(CartIcon);

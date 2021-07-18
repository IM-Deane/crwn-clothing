import React from "react";

import {
	CartItemContainer,
	ProductImage,
	ItemDetailsContainer,
	NameContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<ProductImage src={imageUrl} alt="cart item" />
		<ItemDetailsContainer>
			<NameContainer>{name}</NameContainer>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetailsContainer>
	</CartItemContainer>
);

export default CartItem;

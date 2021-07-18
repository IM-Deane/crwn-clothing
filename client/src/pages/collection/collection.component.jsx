import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItems,
} from "./collection.styles";

const CollectionPage = ({ collection, match }) => {
	useEffect(() => {
		document.title = `${match.params.collectionId.toUpperCase()} | CRWN Clothing`;
	}, [match.params.collectionId]);

	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItems>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItems>
		</CollectionPageContainer>
	);
};

// OwnProps = gets all props from component (therefore match param)
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.components";

// Will be wrapped by HOC
const mapStateToProps = createStructuredSelector({
	// prop must match the expected prop of the HOC
	// ie. isLoading === isLoading
	isLoading: selectIsCollectionFetching,
});

// Container possess all of the qualities passed by the HOC wrappers
// compose = evaluates function chains from right-to-left
const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

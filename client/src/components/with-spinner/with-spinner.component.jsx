import React from "react";

import Spinner from "../spinner/spinner.component";

// HOC = function that wraps around component whose
//  functionality it wants
const WithSpinner =
	(WrappedComponent) =>
	({ isLoading, ...otherProps }) => {
		return isLoading ? (
			// If loading return spinner
			<Spinner />
		) : (
			// Else return component data
			<WrappedComponent {...otherProps} />
		);
	};

export default WithSpinner;

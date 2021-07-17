import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// HOC = function that wraps around component whose
//  functionality it wants
const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...otherProps }) => {
		return isLoading ? (
			// If loading return spinner
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			// Else return component data
			<WrappedComponent {...otherProps} />
		);
	};
	return Spinner;
};

export default WithSpinner;

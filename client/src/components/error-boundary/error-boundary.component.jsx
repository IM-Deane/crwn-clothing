import React from "react";

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from "./error.boundary.styles";

class ErrorBoundary extends React.Component {
	state = {
		hasErrored: false,
	};

	// Catch any error in parent/children ahead of time
	static getDerivedStateFromError(error) {
		// Process error
		return {
			hasErrored: true,
		};
	}

	// Gives access to error and its info
	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				// Error page
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png" />
					<ErrorImageText>Hmm, that wasn't supposed to happen!</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		// Render app
		return this.props.children;
	}
}

export default ErrorBoundary;

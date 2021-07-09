import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
	// Other props handles type="submit" etc
	<button className="custom-button" {...otherProps}>
		{children}
	</button>
);

export default CustomButton;

import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
	// Other props handles type="submit" etc
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

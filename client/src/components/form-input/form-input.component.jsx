import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, isTextarea, ...otherProps }) => (
	<div className="group">
		{isTextarea ? (
			<textarea
				className="form-input"
				onChange={handleChange}
				{...otherProps}
			/>
		) : (
			<input className="form-input" onChange={handleChange} {...otherProps} />
		)}
		{label ? (
			// Add shrink property for floating label effect
			<label
				className={`${
					otherProps.value.length ? "shrink" : ""
				} form-input-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;

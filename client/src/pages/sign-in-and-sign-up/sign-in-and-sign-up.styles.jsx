import styled from "styled-components";

export const CollectionSignInAndSignUp = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		justify-content: space-evenly;

		& div:last-child {
			margin-top: 40px;
		}
	}
`;

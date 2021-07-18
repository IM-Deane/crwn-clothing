import styled from "styled-components";

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CollectionTitle = styled.span`
	font-size: 38px;
	margin: 0 auto 30px;
`;

export const CollectionItems = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	& > div {
		margin-bottom: 30px;
	}

	// Small devices
	@media screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	// Small devices
	@media screen and (max-width: 500px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 4px;
	}
`;

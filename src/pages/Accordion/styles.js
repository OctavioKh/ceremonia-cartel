import styled from "styled-components";

export const Wrapper = styled.div`
	margin-bottom: 2rem;
	background: #fff;
	width:80%;
	text-align:center;
	align-items:center;
	margin: 0 auto;
	border-radius: 4px;
	overflow: hidden;

	&:last-child {
		margin-bottom: unset;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	h4 {
		margin: 0;
	}
`;

export const Arrow = styled.img`
	transition: 0.3s;

	${({ active }) =>
		active &&
		`
    transform: rotate(180deg);
  `}
`;

export const Details = styled.div`
	max-height: 0;
	transition-duration: 0.5s;
	overflow: hidden;
	text-align: left;

	p {
		color: #777777;
	}

	${({ active }) =>
		active &&
		`
    max-height: 450px;
  `}
`;

import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  color: ${Colors.text.dark};
`;

export const LoginContent = styled.div`
	text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29rem;
	height:26rem;
	gap: 0.6rem;
	border-radius:10px;
	background:${Colors.text.white};
	padding:2rem ;
	margin:0 2rem;
`;

export const LoginSubtitle = styled.p`
  color: ${Colors.text.dark};
	font-weight:600;
  width: 100%;
  margin:1rem 0;
  text-align: center;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

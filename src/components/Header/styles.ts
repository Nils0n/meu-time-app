import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const HeaderContainer = styled.div`
  width: 100%;
	height: 5rem;
	max-height: 5rem;
  background-color: ${Colors.background.blue};
  display: flex;
  padding: 20px;
  color: ${Colors.text.white};
	display: flex;
	justify-content: space-between;
`;

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const HeaderItemContainer = styled.div`
	display: flex;
	gap:2rem;
	align-items: center;
`;

export const Items = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HeaderItem = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  align-items: center;


  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;

import styled from 'styled-components';
import Colors from '../../theme/theme.colors';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${Colors.background.blue};
  display: flex;
  padding: 20px;
  color: ${Colors.text.white};
`;

export const HeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;

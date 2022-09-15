import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.background, theme.colors.backgroundLinear],
})`
  flex: 1;
  padding: 0 20px 60px 20px;
`;

export const Header = styled.View``;

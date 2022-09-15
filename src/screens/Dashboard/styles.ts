import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: ${theme.colors.background};
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 32px;
`;

export const HeaderText = styled.Text`
  font-size: 40px;
  font-family: ${theme.fonts.Raleway700};
  color: ${theme.colors.blackText};
`;

export const HeaderIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 45px;
  height: 45px;
`;

export const Card = styled.View``;

export const Footer = styled.View`
  margin-top: 58px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.Raleway700};
  color: '#525252';

  margin-bottom: 23px;
`;

export const ButtonsContainer = styled.View``;

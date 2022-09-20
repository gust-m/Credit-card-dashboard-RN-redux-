import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  background: ${theme.colors.background};
  height: 100%;
  padding-top: 60px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 20px 0;

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

export const SwiperContainer = styled.View`
  height: 270px;
`;

export const Footer = styled.View`
  margin-top: 58px;
  padding: 0 20px 20px 20px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.Raleway700};
  color: '#525252';

  margin-bottom: 23px;
`;

export const ButtonsContainer = styled.View``;

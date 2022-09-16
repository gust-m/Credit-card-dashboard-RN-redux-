import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(236, 0, 140, 0.8)', 'rgba(252, 103, 103, 0.8)'],
})`
  height: 205px;
  width: 100%;

  border-radius: 15px;
`;

export const Content = styled.View`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-family: ${theme.fonts.Raleway700};
  font-size: 20px;
  color: ${theme.colors.whiteText};
`;

export const Footer = styled.View`
  display: flex;
`;

export const UserNameText = styled.Text`
  font-size: 16px;
  font-family: ${theme.fonts.Raleway500};

  color: ${theme.colors.whiteText};
`;

export const CardNumberText = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.Roboto700};

  color: ${theme.colors.whiteText};
`;

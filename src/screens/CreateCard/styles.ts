import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  height: 100%;
  padding: 20px;
  background: ${theme.colors.background};
  padding-top: 60px;
`;

export const Header = styled.View`
  margin-bottom: 35px;
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.Raleway700};
  color: ${theme.colors.blackText};
`;

export const Form = styled.View`
  margin: 33px 0;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${theme.colors.backgroundBlue};
  border-radius: 10px;
  margin-top: auto;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.whiteText};
  text-transform: uppercase;

  font-size: 15px;
  font-family: ${theme.fonts.Raleway700};
`;

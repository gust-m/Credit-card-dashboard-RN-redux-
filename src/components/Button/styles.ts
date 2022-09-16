import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface TextProps {
  color: string;
}

export const Container = styled.View`
  border-radius: 10px;
  margin-bottom: 16px;

  elevation: 0.6;
`;

export const Content = styled.View`
  padding: 23px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  margin-left: 20px;
  color: ${(props) => props.color};
  font-family: ${theme.fonts.Raleway700};
`;

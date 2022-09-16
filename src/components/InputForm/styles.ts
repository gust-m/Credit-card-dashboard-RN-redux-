import styled, { css } from 'styled-components/native';
import { theme } from '../../global/styles/theme';

interface InputProps {
  isUppercase?: boolean;
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 8px;
  font-family: ${theme.fonts.Raleway600};

  color: ${theme.colors.blackText};
  text-transform: uppercase;
`;

export const Input = styled.TextInput<InputProps>`
  font-size: 16px;
  font-family: ${theme.fonts.Roboto400};

  padding: 13px;
  border: 1px solid #e3e1e1;
  border-radius: 6px;
  margin-top: 5px;

  ${(props) =>
    props.isUppercase &&
    css`
      text-transform: uppercase;
    `}
`;

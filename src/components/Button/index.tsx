import { cloneElement, ReactElement } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Content, Text } from './styles';

interface ButtonProps {
  text: string;
  children: ReactElement;
  color?: string;
}

export const Button = ({ children, text, color = '#2D2940' }: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Container>
        <Content>
          {cloneElement(children, {
            color: color,
          })}
          <Text color={color}>{text}</Text>
        </Content>
      </Container>
    </TouchableOpacity>
  );
};

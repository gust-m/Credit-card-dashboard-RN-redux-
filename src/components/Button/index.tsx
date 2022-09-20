import { cloneElement, ReactElement } from 'react';
import {
  TouchableOpacityProps as ReactNativeButtonProps,
  TouchableOpacity,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Content, Text } from './styles';

interface ButtonProps extends ReactNativeButtonProps {
  text: string;
  children: ReactElement;
  color?: string;
}

export const Button = ({
  children,
  text,
  color = '#2D2940',
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity {...rest}>
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

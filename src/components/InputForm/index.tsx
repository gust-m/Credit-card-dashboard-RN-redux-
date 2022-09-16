import { TextInputProps } from 'react-native';
import { Container, Input, Label } from './styles';

interface InputFormProps extends TextInputProps {
  label: string;
}

export const InputForm = ({ label, ...rest }: InputFormProps) => {
  return (
    <Container>
      <Label>{label}</Label>

      <Input {...rest} />
    </Container>
  );
};

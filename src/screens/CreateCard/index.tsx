import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { CreditCard } from '../../components/CreditCard';
import { InputForm } from '../../components/InputForm';
import {
  Button,
  ButtonText,
  Container,
  Form,
  Header,
  HeaderText,
} from './styles';

export const CreateCard = () => {
  const [cardName, setCardName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const formatCardNumber = (text: string) => {
    if (/^([0-9 ]{0,100})+$/.test(text)) {
      const textWithoutSpaces = text.replace(/\s/g, '');
      const formattedTextWithSpaces = textWithoutSpaces.replace(
        /\d{4}(?=.)/g,
        '$& '
      );

      setCardNumber(formattedTextWithSpaces);
    }
  };

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <HeaderText>Adicionar cartão</HeaderText>
        </Header>

        <CreditCard
          cardName={cardName}
          cardNumber={cardNumber}
          customerName={customerName}
        />

        <Form>
          <InputForm
            label="NOME DO CARTÃO"
            onChangeText={(text) => setCardName(text)}
            value={cardName}
            placeholder="Nome do cartão"
          />
          <InputForm
            label="NOME COMPLETO"
            onChangeText={(text) =>
              setCustomerName(text.replace(/[^a-z ]/gi, ''))
            }
            value={customerName}
            placeholder="Nome Completo"
          />
          <InputForm
            label="NÚMERO"
            keyboardType="numeric"
            onChangeText={(text) => formatCardNumber(text)}
            maxLength={19}
            value={cardNumber}
            placeholder="1234 1234 1234 1234"
          />
        </Form>

        <View>
          <Button>
            <ButtonText>ADICIONAR</ButtonText>
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};

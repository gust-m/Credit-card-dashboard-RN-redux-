import {
  CardNumberText,
  Container,
  Content,
  Footer,
  Header,
  HeaderText,
  UserNameText,
} from './styles';

interface CreditCardProps {
  cardName?: string;
  customerName?: string;
  cardNumber?: string;
  showNumber?: boolean;
}

export const CreditCard = ({
  cardName,
  cardNumber,
  customerName,
  showNumber = true,
}: CreditCardProps) => {
  return (
    <Container>
      <Content>
        <Header>
          <HeaderText>{cardName ? cardName : 'Nome do cartão'}</HeaderText>
          <HeaderText>Bandeira</HeaderText>
        </Header>

        <Footer>
          <UserNameText>
            {customerName ? customerName : 'Nome Completo'}
          </UserNameText>
          <CardNumberText>
            {showNumber
              ? cardNumber
                ? cardNumber
                : '1234 1234 1234 1234'
              : '**** **** **** ****'}
          </CardNumberText>
        </Footer>
      </Content>
    </Container>
  );
};

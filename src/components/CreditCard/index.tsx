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
}

export const CreditCard = ({
  cardName,
  cardNumber,
  customerName,
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
            {cardNumber ? cardNumber : '1234 1234 1234 1234'}
          </CardNumberText>
        </Footer>
      </Content>
    </Container>
  );
};

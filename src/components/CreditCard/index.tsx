import {
  CardNumberText,
  Container,
  Content,
  Footer,
  Header,
  HeaderText,
  UserNameText,
} from './styles';

export const CreditCart = () => {
  return (
    <Container>
      <Content>
        <Header>
          <HeaderText>Nome do cartão</HeaderText>
          <HeaderText>Bandeira</HeaderText>
        </Header>

        <Footer>
          <UserNameText>Nome Completo</UserNameText>
          <CardNumberText>1234 1234 1234 1234</CardNumberText>
        </Footer>
      </Content>
    </Container>
  );
};

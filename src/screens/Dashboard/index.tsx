import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Button } from '../../components/Button';
import { CreditCart } from '../../components/CreditCard';

import {
  ButtonsContainer,
  Card,
  Container,
  Footer,
  FooterText,
  Header,
  HeaderIcon,
  HeaderText,
} from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <HeaderText>Cartão</HeaderText>
        <HeaderIcon>
          <FeatherIcon name="plus" size={30} />
        </HeaderIcon>
      </Header>

      <CreditCart />

      <Footer>
        <FooterText>Ações</FooterText>
        <ButtonsContainer>
          <Button text="ESCONDER NÚMERO">
            <IoniconsIcon name="eye-outline" size={30} />
          </Button>
          <Button text="APAGAR CARTÃO" color="#F21D1D">
            <IoniconsIcon name="trash-outline" size={30} />
          </Button>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

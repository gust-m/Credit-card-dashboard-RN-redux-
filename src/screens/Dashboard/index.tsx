import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Button } from '../../components/Button';
import { CreditCard } from '../../components/CreditCard';

import {
  ButtonsContainer,
  Container,
  Footer,
  FooterText,
  Header,
  HeaderIcon,
  HeaderText,
} from './styles';

export const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <HeaderText>Cartão</HeaderText>

          <TouchableOpacity
            onPress={() => navigation.navigate('CreateCard' as never)}
          >
            <HeaderIcon>
              <FeatherIcon name="plus" size={30} />
            </HeaderIcon>
          </TouchableOpacity>
        </Header>

        <CreditCard />

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
    </SafeAreaView>
  );
};

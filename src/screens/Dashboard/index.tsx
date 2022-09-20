import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button';
import { CreditCard } from '../../components/CreditCard';
import { removeCard } from '../../store/modules/cards/actions';
import { ICardState } from '../../store/modules/cards/types';

import {
  ButtonsContainer,
  Container,
  Footer,
  FooterText,
  Header,
  HeaderIcon,
  HeaderText,
  SwiperContainer,
} from './styles';

interface ICardSelectorProps {
  cards: ICardState[];
}

export const Dashboard = () => {
  const navigation = useNavigation();

  const { cards } = useSelector<ICardSelectorProps, ICardSelectorProps>(
    (state) => state
  );

  const [hasToShowCardNumber, setHasToShowCardNumber] = useState(true);
  const [currentIdCard, setCurrentIdCard] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfCardWasAlreadyDeleted = cards.find(
      (item) => item.id === currentIdCard
    );
    if ((!currentIdCard || !checkIfCardWasAlreadyDeleted) && cards.length > 0) {
      setCurrentIdCard(cards[0].id);
    }
  }, [cards]);

  const handleRemoveCard = useCallback(() => {
    if (currentIdCard) {
      dispatch(removeCard(currentIdCard));
    }
  }, [dispatch, removeCard, currentIdCard]);

  const handleChangeIndex = useCallback(
    (index: number) => {
      setCurrentIdCard(cards[index].id);
    },
    [cards]
  );

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

        <SwiperContainer>
          <Swiper
            key={cards.length}
            onIndexChanged={(index) => handleChangeIndex(index)}
            loop={false}
            dot={
              <View
                style={{
                  backgroundColor: '#C4C4C4',
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginLeft: 3,
                  marginRight: 3,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#383838',
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginLeft: 3,
                  marginRight: 3,
                }}
              />
            }
          >
            {cards.length > 0 ? (
              cards.map((card: ICardState) => (
                <View
                  key={card.id}
                  style={{
                    width: '90%',
                    marginLeft: '5%',
                  }}
                >
                  <CreditCard
                    showNumber={hasToShowCardNumber}
                    cardName={card.cardName}
                    cardNumber={card.number}
                    customerName={card.name}
                  />
                </View>
              ))
            ) : (
              <View
                style={{
                  width: '90%',
                  marginLeft: '5%',
                }}
              >
                <CreditCard showNumber={hasToShowCardNumber} />
              </View>
            )}
          </Swiper>
        </SwiperContainer>

        <Footer>
          <FooterText>Ações</FooterText>

          <ButtonsContainer>
            <Button
              text={`${hasToShowCardNumber ? 'ESCONDER' : 'MOSTRAR'} NÚMERO`}
              onPress={() => setHasToShowCardNumber(!hasToShowCardNumber)}
            >
              {hasToShowCardNumber ? (
                <IoniconsIcon name="eye-outline" size={30} />
              ) : (
                <IoniconsIcon name="eye-off-outline" size={30} />
              )}
            </Button>
            <Button
              text="APAGAR CARTÃO"
              color="#F21D1D"
              onPress={handleRemoveCard}
            >
              <IoniconsIcon name="trash-outline" size={30} />
            </Button>
          </ButtonsContainer>
        </Footer>
      </Container>
    </SafeAreaView>
  );
};

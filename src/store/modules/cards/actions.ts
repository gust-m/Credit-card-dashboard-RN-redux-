import { ICardState } from './types';

export const addCard = (card: ICardState) => {
  return {
    type: 'ADD_CARD',
    payload: {
      card,
    },
  };
};

export const removeCard = (cardId: string) => {
  return {
    type: 'REMOVE_CARD',
    payload: {
      cardId,
    },
  };
};

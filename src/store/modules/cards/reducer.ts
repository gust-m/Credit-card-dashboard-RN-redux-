import { Reducer } from 'redux';
import produce from 'immer';
import { ICardState } from './types';

const INITIAL_STATE: ICardState[] = [];

export const cards: Reducer<ICardState[]> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_CARD': {
        const { card }: { card: ICardState } = action.payload;

        draft.push(card);

        break;
      }
      case 'REMOVE_CARD': {
        const { cardId } = action.payload;
        const index = draft.findIndex((item) => item.id === cardId);

        if (index !== -1) {
          draft.splice(index, 1);
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';
import { ICardState } from './modules/cards/types';

export interface IState {
  cards: ICardState[];
}

export const store = configureStore({
  reducer: rootReducer,
});

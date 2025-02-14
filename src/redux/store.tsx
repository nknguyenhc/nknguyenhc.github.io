import { configureStore } from '@reduxjs/toolkit';
import { imageModalReducer, textModalReducer } from './modalSlice';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { PropsWithChildren } from 'react';

const store = configureStore({
  reducer: {
    imageModal: imageModalReducer,
    textModal: textModalReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const AppProvider = ({ children }: PropsWithChildren): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

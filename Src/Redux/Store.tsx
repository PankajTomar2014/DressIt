import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
// import draftTransactionSlice from './draftTransactionSlice';
// import kycSlice from './kycSlice';
// import documentSlice from './documentSlice';
// import exchangeRateReducer from './exchangeRateSlice';
// import themeReducer from './themeSlice';
// import timerReducer from './timerSlice';

const loggerMiddleware = store => next => action => {
  // console.log('Dispatching action:', action.type);
  return next(action);
};

const store = configureStore({
  reducer: {
    user: userReducer,
    // transaction: draftTransactionSlice,
    // kyc: kycSlice,
    // docs: documentSlice,
    // exchangeRate: exchangeRateReducer,
    // theme: themeReducer,
    // timer: timerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

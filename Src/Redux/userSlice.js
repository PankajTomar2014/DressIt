import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },

    getUser: state => {
      return state;
    },

    updateUser: (state, action) => {
      state.user = {...state.user, ...action};
    },

    resetUser: state => {
      AsyncStorage.removeItem('user');
      state.user = null;
    },
  },
});

export const {saveUser, updateUser, getUser, resetUser} = userSlice.actions;

export default userSlice.reducer;

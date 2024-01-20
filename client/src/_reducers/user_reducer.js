import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    auth() {
      const request = axios.get('/api/users/auth')
        .then(response => response.data)
      return request
    }
  },
});

const registerSlice = createSlice({
  name: 'register',
  initialState: {},
  reducers: {
    registerUser(dataToSubmit) {
      const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)
      return request
    }
  }
})

const loginSlice = createSlice({
  name: 'loginSuccess',
  initialState: {},
  reducers: {
    loginUser(dataToSubmit) {
      const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)
      return request
    }
  }
})

export {userDataSlice, registerSlice, loginSlice};

// export default function user (state = {}, action) {
//   switch (action.type) {
//     case LOGIN_USER:
//       return { ...state, loginSuccess: action.payload }
//     case REGISTER_USER:
//       return { ...state, register: action.payload }
//     case AUTH_USER:
//       return { ...state, userData: action.payload }
//     default:
//       return state;
//   }
// }
import { server } from "../store";
import axios from "axios";

import {
  loginRequest,
  loginSuccess,
  loginFail,
  registerRequest,
  registerSuccess,
  registerFail,
  loadUserRequest,
  loadUserSuccess,
  loadUserFail,
  logoutRequest,
  logoutSuccess,
  logoutFail,
} from "../reducers/userReducer";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const { data } = await axios.post(
      // `${server}/login`,
      `${server}/login`,

      { email, password },
      {
        headers: {
          "Content-type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const register = (formdata) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const { data } = await axios.post(
      // `${server}/register`
      `${server}/register`,
      formdata,
      {
        headers: {
          "Content-type": "multipart/form-data",
        },

        withCredentials: true,
      }
    );

    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch(loadUserRequest());

    const { data } = await axios.get(
      `${server}/me`,

      {
        withCredentials: true,
      }
    );
    dispatch(loadUserSuccess(data.user));
  } catch (error) {
    dispatch(loadUserFail(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(logoutRequest());

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch(logoutSuccess(data.message));
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};

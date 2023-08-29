import { server } from "../store";
import axios from "axios";

import {
  updateProfileRequest,
  updateProfileSuccess,
  updateProfileFail,
  updateProfilePictureRequest,
  updateProfilePictureSuccess,
  updateProfilePictureFail,
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFail,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordFail,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordFail,
} from "../reducers/userReducer";

export const updateProfile = (formdata) => async (dispatch) => {
  try {
    dispatch(updateProfileRequest());

    const { data } = await axios.put(`${server}/me/update`, formdata, {
      headers: {
        "Content-type": "multipart/form-data",
      },

      withCredentials: true,
    });

    dispatch(updateProfileSuccess(data.message));
  } catch (error) {
    dispatch(updateProfileFail(error.response.data.message));
  }
};

export const updateProfilePicture = (formdata) => async (dispatch) => {
  try {
    dispatch(updateProfilePictureRequest());

    const { data } = await axios.put(`${server}/me/updateAvatar`, formdata, {
      headers: {
        "Content-type": "multipart/form-data",
      },

      withCredentials: true,
    });

    dispatch(updateProfilePictureSuccess(data.message));
  } catch (error) {
    dispatch(updateProfilePictureFail(error.response.data.message));
  }
};

export const changePassword =
  (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
      dispatch(changePasswordRequest());

      const { data } = await axios.put(
        `${server}/password/update`,
        {
          oldPassword,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            "Content-type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch(changePasswordSuccess(data.message));
    } catch (error) {
      dispatch(changePasswordFail(error.response.data.message));
    }
  };

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgetPasswordRequest());

    const config = {
      headers: {
        "Content-type": "application/json",
      },

      withCredentials: true,
    };

    const { data } = await axios.post(
      `${server}/password/forgot`,
      {
        email,
      },
      config
    );

    dispatch(forgetPasswordSuccess(data.message));
  } catch (error) {
    dispatch(forgetPasswordFail(error.response.data.message));
  }
};

export const resetPassword =
  (token, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch(resetPasswordRequest());
      const config = {
        headers: {
          "Content-type": "application/json",
        },

        withCredentials: true,
      };

      const { data } = await axios.put(
        `${server}/password/reset/${token}`,
        {
          password,
          confirmPassword,
        },
        config
      );

      dispatch(resetPasswordSuccess(data.message));
    } catch (error) {
      dispatch(resetPasswordFail(error.response.data.message));
    }
  };

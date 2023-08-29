import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

// Create action creators using Redux Toolkit
export const loginRequest = createAction("login/request");
export const loginSuccess = createAction("login/success");
export const loginFail = createAction("login/fail");

export const registerRequest = createAction("register/request");
export const registerSuccess = createAction("register/success");
export const registerFail = createAction("register/fail");

export const loadUserRequest = createAction("loadUser/request");
export const loadUserSuccess = createAction("loadUser/success");
export const loadUserFail = createAction("loadUser/fail");

export const logoutRequest = createAction("logout/request");
export const logoutSuccess = createAction("logout/success");
export const logoutFail = createAction("logout/fail");

export const clearError = createAction("clearerror");
export const clearMessage = createAction("clearmessage");

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: { role: "user" },
  message: null,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest, (state) => {
      state.loading = true;
    })
    .addCase(loginSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase(loginFail, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(registerRequest, (state) => {
      state.loading = true;
    })
    .addCase(registerSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase(registerFail, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(logoutRequest, (state) => {
      state.loading = true;
    })
    .addCase(logoutSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = { role: "user" };
      state.message = action.payload;
    })
    .addCase(logoutFail, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase(loadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(loadUserSuccess, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(loadUserFail, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
    .addCase(clearMessage, (state) => {
      state.message = null;
    });
});

// Create action creators
export const updateProfileRequest = createAction("updateProfile/request");
export const updateProfileSuccess = createAction("updateProfile/success");
export const updateProfileFail = createAction("updateProfile/fail");

export const updateProfilePictureRequest = createAction(
  "updateProfilePicture/request"
);
export const updateProfilePictureSuccess = createAction(
  "updateProfilePicture/success"
);
export const updateProfilePictureFail = createAction(
  "updateProfilePicture/fail"
);

export const changePasswordRequest = createAction("changePassword/request");
export const changePasswordSuccess = createAction("changePassword/success");
export const changePasswordFail = createAction("changePassword/fail");

export const forgetPasswordRequest = createAction("forgetPassword/request");
export const forgetPasswordSuccess = createAction("forgetPassword/success");
export const forgetPasswordFail = createAction("forgetPassword/fail");

export const resetPasswordRequest = createAction("resetPassword/request");
export const resetPasswordSuccess = createAction("resetPassword/success");
export const resetPasswordFail = createAction("resetPassword/fail");

const initialState2 = {
  loading: false,
  message: null,
  error: null,
};

export const profileReducer = createReducer(initialState2, (builder) => {
  builder
    .addCase(updateProfileRequest, (state) => {
      state.loading = true;
    })
    .addCase(updateProfileSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(updateProfileFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateProfilePictureRequest, (state) => {
      state.loading = true;
    })
    .addCase(updateProfilePictureSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(updateProfilePictureFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(changePasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(changePasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(changePasswordFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(forgetPasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(forgetPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(forgetPasswordFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(resetPasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(resetPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(resetPasswordFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
    .addCase(clearMessage, (state) => {
      state.message = null;
    });
});

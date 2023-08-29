import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

// Create action creators
export const contactRequest = createAction("contact/request");
export const contactSuccess = createAction("contact/success");
export const contactFail = createAction("contact/fail");
export const clearError = createAction("clearerror");
export const clearMessage = createAction("clearmessage");

export const otherReducer = createReducer({}, (builder) => {
  builder
    .addCase(contactRequest, (state) => {
      state.loading = true;
    })
    .addCase(contactSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(contactFail, (state, action) => {
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

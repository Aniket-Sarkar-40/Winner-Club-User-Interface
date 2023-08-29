import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

// Create action creators
export const allCoursesRequest = createAction("allCourses/request");
export const allCoursesSuccess = createAction("allCourses/success");
export const allCoursesFail = createAction("allCourses/fail");
export const singleCourseRequest = createAction("singleCourse/request");
export const singleCourseSuccess = createAction("singleCourse/success");
export const singleCourseFail = createAction("singleCourse/fail");

const initialState = { courses: [], loading: false, error: null, course: null };

export const courseReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(allCoursesRequest, (state) => {
      state.loading = true;
    })
    .addCase(allCoursesSuccess, (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    })
    .addCase(allCoursesFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(singleCourseRequest, (state) => {
      state.loading = true;
    })
    .addCase(singleCourseSuccess, (state, action) => {
      state.loading = false;
      state.course = action.payload;
    })
    .addCase(singleCourseFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

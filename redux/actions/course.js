import { server } from "../store";

import axios from "axios";

import {
  allCoursesFail,
  allCoursesRequest,
  allCoursesSuccess,
  singleCourseRequest,
  singleCourseSuccess,
  singleCourseFail,
} from "../reducers/courseReducer";

export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch(allCoursesRequest()); // Dispatch the action creator
    const { data } = await axios.get(`${server}/courses`);

    dispatch(allCoursesSuccess(data.courses)); // Dispatch the action creator with payload
  } catch (error) {
    dispatch(allCoursesFail(error.response.data.message)); // Dispatch the action creator with payload
  }
};

export const getSingleCourse = (id) => async (dispatch) => {
  try {
    const config = {
      withCredentials: true,
    };
    dispatch(singleCourseRequest());

    const { data } = await axios.get(`${server}/courses/${id}`, config);

    dispatch(singleCourseSuccess(data.course));
  } catch (error) {
    dispatch(singleCourseFail(error.response.data.message));
  }
};

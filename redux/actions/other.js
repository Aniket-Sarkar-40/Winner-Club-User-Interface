import { server } from "../store";
import axios from "axios";
import {
  contactRequest,
  contactSuccess,
  contactFail,
} from "../reducers/otherReducer";
// Your action creator function
export const contactUs = (name, email, message) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    };

    dispatch(contactRequest()); // Dispatch the action creator

    const { data } = await axios.post(
      `${server}/contactus`,
      { name, email, message },
      config
    );

    dispatch(contactSuccess(data.message)); // Dispatch the action creator with payload
  } catch (error) {
    dispatch(contactFail(error.response.data.message)); // Dispatch the action creator with payload
  }
};

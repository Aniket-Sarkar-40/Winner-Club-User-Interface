import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./reducers/courseReducer";
import { otherReducer } from "./reducers/otherReducer";
import { userReducer, profileReducer } from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    other: otherReducer,
  },
});

export default store;
export const server = "https://winners-club-backend.vercel.app/api/v1";
// export const server = "http://localhost:8000/api/v1";

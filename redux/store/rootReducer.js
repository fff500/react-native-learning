import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userSlice";
import postsSlice from "../reducers/postsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsSlice,
});

export default rootReducer;

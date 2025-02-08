import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = [...action.payload];
    },
    addPost(state, action) {
      state.posts = [...state.posts, action.payload];
    },
    removePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { setPosts, addPost, removePost } = postsSlice.actions;

export default postsSlice.reducer;

import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface IPostState {
  id: string;
  title: string;
  author: string;
  description: string;
  markdown: string;
  created_at: Date;
}

export interface PostsState {
  post: IPostState[];
}

const initialPostState: PostsState = {
  post: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    addPost(state, action) {
      state.post = [...state.post, action.payload];
    },
    setPost(state, action) {
      state.post = action.payload;
    },
    deletePost(state, action) {
      state.post = state.post.filter((list) => list.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
  },
});

export const postActions = postSlice.actions;

export default store;

export type RootState = ReturnType<typeof postSlice.reducer>;

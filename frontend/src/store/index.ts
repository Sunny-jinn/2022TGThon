import { createSlice, configureStore } from "@reduxjs/toolkit";

export interface IPostState {
  id: number;
  title: string;
  author: string;
  text: string;
  markdown: string;
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

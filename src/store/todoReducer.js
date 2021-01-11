import { createSlice } from "@reduxjs/toolkit";

// Stateの初期状態
const initialState = {
  name: '',
  todos: []
};

// Sliceを生成する
const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setName: (state, action) => {
      return Object.assign({}, state, { name: action.payload })
    },
    clearName: state => {
      return Object.assign({}, state, { name: "" })
    },
    setTodos: (state, action) => {
      console.log("store-setTodos");
      console.log(action);
      return Object.assign({}, state, { todos: action.payload })
    },
    // etc...
  }
});

// Reducerをエクスポートする
export default slice.reducer;

// Action Creatorsをエクスポートする
export const { setName, clearName, setTodos } = slice.actions;
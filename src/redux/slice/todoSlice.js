import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        title: action.payload,
        completed: false
      });
      toast.success("Added Task")
    },

    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.index === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    editTodo: (state, action) => {
      const { index, newTitle } = action.payload;
      const todo = state.items.find(item => item.index === index);
      if (todo) {
        todo.title = newTitle;
      }
      toast.info("Edit Task Successfully")
    },

    deleteTodo: (state, action) => {
      state.items.splice(action.payload, 1);
       // console.log("Delete",index)

    }
  }
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
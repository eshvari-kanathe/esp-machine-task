import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: function (state, action) {
      state.items.push({
        title: action.payload,
        completed: false
      });
      toast.success("Added Task");
    },

    toggleTodo: function (state, action) {
      const index = action.payload;
      state.items[index].completed = !state.items[index].completed;
    },

    editTodo: function (state, action) {
      const { index, newTitle } = action.payload;
      state.items[index].title = newTitle;
      toast.info("Edit Task Successfully");
    },

    deleteTodo: function (state, action) {
      state.items.splice(action.payload, 1);
      toast.error("Deleted Task");
    }
  }
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
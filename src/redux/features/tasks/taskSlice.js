import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mir Hussain",
      priority: "high",
    },
  ],

  userTask: [],
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastId = state.task.at(-1);
        state.task.push({ id: lastId.id + 1, status: "pending", ...payload });
      }
    },

    removeTask: (state, { payload }) => {
      state.task = state.task.filter((item) => item.id != payload);
    },

    updatedTask: (state, { payload }) => {
      const target = state.task.find((item) => item.id == payload.id);
      target.status = payload.status;
    },
    usersTask: (state, { payload }) => {
      state.userTask = state.task.filter((item) => item.assignedTo === payload);
    },
  },
});

export const { addTask, removeTask, updatedTask, usersTask } =
  taskSlice.actions;

export default taskSlice.reducer;

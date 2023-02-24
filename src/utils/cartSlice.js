import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total = state.total + action.payload.price;
    },
    removeItem: (state, action) => {
      let i = state.items.findIndex((item) => item?.id === action.payload.id);
      state.items.splice(i, 1);
      console.log("state items after", state.items);
      state.total = state.total - action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

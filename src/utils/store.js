import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
/**
Create store
    - configureStore() - RTK

Provide my store to app
    - <Provider store={store}> react-redux
 
Slice 
- RTK - createSlice({
    name:"",
    initailaState:,
    reducers:{
        additem: (state, action) => {state=action.payload}
    }
})
export const{addItem, removeItem} = cartSlice.actions;
export default cartSlic.reducer;

Put that Slice into Store
-{
    reducer{
        cart:cartSlice,
        user:userSlice
    }
}
 */

import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('products') !== null ? JSON.parse(localStorage.getItem('products')) : [];

const initialState = {
  products: items,
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
 
  reducers: {

    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity
        state.totalQuantity += action.payload.quantity;
        state.totalAmount += action.payload.price * action.payload.quantity;
      }
      else {
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
          count: action.payload.count,
        });
        localStorage.setItem('products', JSON.stringify(state.products));
        state.totalQuantity += action.payload.quantity;
        state.totalAmount += action.payload.price * action.payload.quantity;
      }
    },

    removeItem: (state, action) => {
        const itemIndex = state.products.findIndex(item => item.id === action.payload);
        if (itemIndex !== -1) {
          state.totalQuantity -= state.products[itemIndex].quantity;
          state.totalAmount -= state.products[itemIndex].price * state.products[itemIndex].quantity;
          state.products.splice(itemIndex, 1);
        }
    },
    updateCount: (state, action) => {
        const item = state.products.find(item => item.id === action.payload.id);
        if (item) {
          const countDiff = action.payload.count - item.count;
          item.count = action.payload.count;
          state.totalQuantity += countDiff;
          state.totalAmount += item.price * countDiff;
        }
      },
  },
})


// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, updateCount } = cartSlice.actions

export default cartSlice.reducer
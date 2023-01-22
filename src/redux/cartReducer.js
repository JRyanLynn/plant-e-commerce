//start here, you already added everything to your index.js 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity
      }
      else {
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
          count: action.payload.count,
        });
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload)
    },
    resetCart: (state) => {
      state.products = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer
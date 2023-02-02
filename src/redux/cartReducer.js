import { createSlice } from '@reduxjs/toolkit'

//stores products in local storage
const items = localStorage.getItem('products') !== null ? JSON.parse(localStorage.getItem('products')) : [];

//Empty cart to start
const initialState = {
  products: items,
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  //State grabbed from above
  initialState,
 
  reducers: {

    addToCart: (state, action) => {
      //grabs item id from array and assigns it to payload
      const item = state.products.find(item => item.id === action.payload.id);

      if (item) {
        //increments payload quantity
        item.quantity += action.payload.quantity
        //total quantity assigned to payload
        state.totalQuantity += action.payload.quantity;
        //total price
        state.totalAmount += (action.payload.price  * action.payload.quantity);
      }
      else {
        //pushes items to reducer array
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          img: action.payload.img,
          price: action.payload.price,
          count: action.payload.count,
        });
        //Grabs items from local storage
        localStorage.setItem('products', JSON.stringify(state.products));
        //increments quantity
        state.totalQuantity += action.payload.quantity;
        //total price
        state.totalAmount += ((action.payload.price) * action.payload.quantity);
      }
    },

    removeItem: (state, action) => {
      //Grabs index of item from data array
      const itemIndex = state.products.findIndex(item => item.id === action.payload);
      if (itemIndex !== -1) {
        const item = state.products[itemIndex];
        //decrements item quantity
        state.totalQuantity -= item.quantity;
        //decrements price 
        state.totalAmount -= item.price * item.quantity;
        //Removes item from array
        state.products.splice(itemIndex, 1);
        //Grabs item from local storage
        localStorage.setItem('products', JSON.stringify(state.products));
      }
      //No items in cart
      if (state.products.length === 0) {
        state.totalQuantity = 0;
        state.totalAmount = 0;
      }
  },
    updateCount: (state, action) => {
      //Finds item ID in array
        const item = state.products.find(item => item.id === action.payload.id);
        if (item) {
          //changes quantity
          const countDiff = action.payload.count - item.count;
          //Assigns item  count to payload
          item.count = action.payload.count;
          //Total item quantity in payload
          state.totalQuantity += countDiff;
          //Total price 
          state.totalAmount += item.price * countDiff;
        }
      },
  },
})


// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart, updateCount} = cartSlice.actions

export default cartSlice.reducer
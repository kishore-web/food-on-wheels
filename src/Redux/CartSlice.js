import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "SliceCart",
    initialState : {
      items: []
    },
    reducers: {
      addItem: (state,action)=>{
        state.items.push(action.payload)
      },
      removeItem: (state,action)=>{
        state.items.shift()
      },
      clearCart: (state) =>{
        state.items = []
      }
    }

})
export const {addItem, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer
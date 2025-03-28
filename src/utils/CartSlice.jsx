import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
    name : 'cart',
    initialState: {
        items: ["Banana" , "Apple" , "Orange" , "Mango" , "Pineapple"],
    },
    reducers: {
        addItem : (state , action) => {
            state.items.push(action.payload)
        }
        },
        removeItem : (state , action) => {   
            state.items.pop();
        },
        clearCart : (state) => {
            state.items = []
        }
})
export const {addItem , removeItem , clearCart} = CartSlice.actions
export default CartSlice.reducer;

import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
const Store = configureStore({      // bug object that contains the slices of data 
    reducer :{
        cart : CartSlice,
    }
});

export default Store
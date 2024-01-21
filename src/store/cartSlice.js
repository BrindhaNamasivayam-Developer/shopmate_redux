const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        add(state, action){
            const updateState = state.cartList.concat(action.payload);
            const updateTotal = state.total + action.payload.price;
            return{...state,total:updateTotal,cartList:updateState}           
        },
        remove(state,action){
           const updateState = state.cartList.filter((values)=>values.id!==action.payload.id);
           const updateTotal = state.total - action.payload.price;
           return{...state,total:updateTotal,cartList:updateState}
        }
    }
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
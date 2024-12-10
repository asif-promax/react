import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
};
export const Cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const item=state.items.find((i)=>i.id===action.payload.id)
            if (item){
                item.quantity+=1;
            }else{
                state.items.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action)=>{
            const item=state.items.find((i)=>i.id===action.payload);
            if(item){
                item.quantity+=1;
            }
        },
        decrement:(state,action)=>{
            const item=state.items.find((i)=>i.id=== action.payload);
            if(item && item.quantity>1){
                item.quantity-=1;
            }
        },
    },
});

export const{addItem,increment,decrement}=Cartslice.actions;
export default Cartslice.reducer;
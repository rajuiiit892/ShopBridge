import { BUY_LAPTOP, BUY_MOBILE } from "../actions/actionsTypes";

const initialState={
    laptops: 100,
    mobiles: 1000
}
const productReducer=(state=initialState, action)=>{
    switch(action.type){
        case BUY_LAPTOP:
            return { laptops: state.laptops-1,mobiles: state.mobiles }
        case BUY_MOBILE:
            return { laptops: state.laptops,mobiles: state.mobiles-1 }
        default:
            return state;
    }
}
export default productReducer;
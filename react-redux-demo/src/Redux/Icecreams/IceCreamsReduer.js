import { BUY_ICECMREAM } from "./IceCreamsType";

const initialState = {
    numOfIceCreams: 20
}

const IceCreamsReducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_ICECMREAM : return{
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

export default IceCreamsReducer;
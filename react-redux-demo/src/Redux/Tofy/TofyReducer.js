import { BUY_TOFY } from "./TofyType"

const initialState = {
    numOfTofies : 15
}

const TofyReducer = (state=initialState, action) =>{
    switch(action.type){
        case BUY_TOFY: return{
            ...state,
            numOfTofies : state.numOfTofies - 1
        }

        default: return state
    }
}

export default TofyReducer
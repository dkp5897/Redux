import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import IceCreamsReducer from "./Icecreams/IceCreamsReduer";
import TofyReducer from "./Tofy/TofyReducer";

const RootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : IceCreamsReducer,
    tofy : TofyReducer
})

export default RootReducer
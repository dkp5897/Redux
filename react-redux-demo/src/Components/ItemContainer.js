import React from "react";
import {connect} from 'react-redux'

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
    </div>
  );
}

const mapStatetoProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

    return{
        item : itemState
    }
};

export default connect(mapStatetoProps) (ItemContainer);

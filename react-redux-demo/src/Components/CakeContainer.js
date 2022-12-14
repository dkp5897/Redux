import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(
    mapStatetoProps,
    mapDispatchToProps)
    (CakeContainer);

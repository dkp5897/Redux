import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/authentication";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {email,password} = useSelector((state)=>state.authentication)

  const [getForm,setForm] = useState({
    email:'',
    password:''
  })

//   console.log(email)

  const changeHandler2 = (e) =>{
    setForm({
        ...getForm,
        [e.target.name] : e.target.value
    })
  }

//   console.log(getForm)

  const loginHandler = (e) => {
    e.preventDefault();
    if(getForm.email === email && getForm.password===password ){
        dispatch(loginSuccess())
        navigate("/product");
    }else{
        alert('invalid data!')
    }
  };

  return (
    <div className="container">
      <form>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            name="email"
            onChange={changeHandler2}
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            name="password"
            onChange={changeHandler2}
          />
        </div>

        <button type="submit" onClick={loginHandler} class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

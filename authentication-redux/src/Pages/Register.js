import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerSuccess } from "../redux/authentication";

function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [getData,setDate] = useState({
        email:'',
        password:'',
        username:''
    })

    const changeHandler = (e) =>{
        setDate({
            ...getData,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(registerSuccess(getData))
        navigate("/login")
    }

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label >Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            name='username'
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            name='email'
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name='password'
            onChange={changeHandler}
          />
        </div>
        <button type="submit" onClick={submitHandler} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;

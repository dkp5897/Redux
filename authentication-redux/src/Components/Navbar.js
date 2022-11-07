import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
    const [getLogOut,setLogOut] = useState(false)

    const registerHandler = (e) =>{
        e.preventDefault()
        navigate("/")
    }
    const loginHandler = (e) =>{
        e.preventDefault()
        navigate("/login")
        setLogOut(false)
    }
    const logOutHandler = (e) =>{
        e.preventDefault()
        setLogOut(true)
        navigate("/login")
        // console.log('logout')
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          {getLogOut? <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={registerHandler}
            >
              Register
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={loginHandler}
            >
              Login
            </button>
          </form>:
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={logOutHandler}
            >
              Logout
            </button>
          </form>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

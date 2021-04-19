import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from "../../actions/user.action"

export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  // const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(username, password, from));
    }
  }

  return (
    <div>
      <div className="col-lg-8 offset-lg-2" style={{ width: "25%", marginLeft: "35%", marginTop: "10%", borderStyle: "groove", borderRadius: "20px" }}>
        <h3 style={{ marginLeft: "40%" }}>Login</h3>
        <br />
        <form name="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={handleChange} className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
            {submitted && !username &&
              <div className="invalid-feedback">Username is required</div>
            }
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
            {submitted && !password &&
              <div className="invalid-feedback">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Login
                </button>
            <Link to="/register" className="btn btn-link">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Login };

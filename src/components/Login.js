import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";

const Login = (props) => {
  const [cred , setCred] = useState({
    email: "" ,
    password: ""
  })
  let navigate = useNavigate()

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:3001/api/auth/login" , {
      method: 'POST' ,
      headers: {
        'Content-type': 'application/json' ,
      } ,
      body: JSON.stringify({email: cred.email , password: cred.password})
    })
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token' , json.authToken)
      props.showAlert("Login successfully" , "success")
      navigate('/')
    } else {
      props.showAlert(json.error , "danger")
    }
  }



  return (
    <div className="container">
      <h2>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={cred.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={cred.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
      <div className="my-3">
      <Link to="/signup" role="button" className="my-3">Don't have a account create one by clicking here</Link>
      </div>
    </div>
  );
};

export default Login;

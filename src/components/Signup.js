import React, { useState } from "react";
import { useNavigate , Link} from "react-router-dom";


const Signup = (props) => {
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:3001/api/auth/createuser" , {
      method: 'POST' ,
      headers: {
        'Content-type': 'application/json' ,
      } ,
      body: JSON.stringify({name:cred.name , email: cred.email , password: cred.password})
    })
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem('token' , json.authToken)
      props.showAlert("Account created successfully" , "success")
      navigate('/')
    } else {
      props.showAlert(json.error , "danger")
    }
    // console.log({name:cred.name , email: cred.email , password: cred.password});
  }

  const onChangeHandler = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2>Signup to get access to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
            name="email"
            required
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
            onChange={onChangeHandler}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="my-3">
      <Link to="/login" role="button" className="my-3">Already have an account Login by clicking here</Link>
      </div>
    </div>
  );
};

export default Signup;

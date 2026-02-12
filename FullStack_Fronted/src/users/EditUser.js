import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link,useNavigate,useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
    
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={onSubmit}>

            <div className="mb-3">
              <label className="form-label">Name: </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onInputChange}
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">UserName: </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onInputChange}
                placeholder="Enter UserName"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email: </label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onInputChange}
                placeholder="Enter Email"
              />
            </div>

            <button type="submit" className="btn btn-outline-primary me-2">
              Submit
            </button>

            <Link to="/" className="btn btn-outline-danger">
              Cancel
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
}

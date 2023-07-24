import React from "react";
import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [user, setUser] = useState({
    personalName: "",
        emailId: "",
        userName: "",
        contactInfo: "",
        profilePicture: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:3030/user/create-user", user)
      .then((res) => {
        console.log(res, "getting response");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Getting Name  & value", name, value);
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}  style={{
          width: "50%",
          margin: " 20px auto",
          border: "1px solid lightGrey",
          padding: "20px",
        }}>
        <label style={{ margin: "auto 10px auto auto" }}>Personal Name</label>
        <input
          type="text"
          name="personalName"
          onChange={(e) => handleChange(e)}
          placeholder="enter full name"
          style={{ margin: "15px auto" }}
        />
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>Email</label>
        <input
          type="email"
          name="emailId"
          onChange={(e) => handleChange(e)}
          placeholder="Enter email"
          style={{ margin: "15px auto" }}
        />
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>UserName</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => handleChange(e)}
          placeholder="enter user name"
          style={{ margin: "15px auto" }}
        ></input>
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>Contact Info</label>
        <input
          type="number"
          name="contactInfo"
          onChange={(e) => handleChange(e)}
          placeholder="enter contact details"
          style={{ margin: "15px auto" }}
        ></input>
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>upload profile picture</label>
        <input type="file" onChange={(e) => handleChange(e)} name="profilePicture"></input>
        <br />
        <input style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 25px",
            margin: '20px auto'
          }} type="submit"></input>
      </form>
    </div>
  );
};

export default AddUser;

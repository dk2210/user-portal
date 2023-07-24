import React from "react";
import { useState,  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {

  const [user, setUser] = useState({
    personalName: "",
        emailId: "",
        userName: "",
        contactInfo: "",
        profilePicture: ""
  });
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // setSelectedFile(file);
    axios
      .post("http://localhost:3030/user/create-user", user)
      .then((res) => {
        console.log(res, "getting response");
        alert("User registered successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(e.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => { 
        console.log(reader.result);
    setUser({ ...user, [name]: reader.result });
      }
    }else {
      setUser({ ...user, [name]: value });
    }
    console.log("Getting Name  & value", name, value);
  };

  // const handleUploadFile = (event) => {
  //   // Capture the selected file from the input element
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  // };

  return (
    <div>
      <h2>Registeration Form</h2>
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
        <input type="file" accept="file_extension|image/*|media_type" onChange={(e) => handleChange(e)} name="profilePicture"></input>
        <br />
        <input style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 25px",
            margin: '20px auto',
            cursor: "pointer"
          }} type="submit"></input>
      </form>
    </div>
  );
};

export default AddUser;

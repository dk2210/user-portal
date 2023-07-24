import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  let reply = window.location.pathname;
  const param = useParams();
  const navigate = useNavigate();
  console.log(reply, param.id);

  const [user, setUser] = useState({
    personalName: "",
    emailId: "",
    userName: "",
    contactInfo: "",
    profilePicture: "",
  });

  const getData = useCallback(async () => {
    await axios
      .get(`http://localhost:3030/user/${param.id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log("Getting Error:", err);
      });
  }, [param.id]);
  console.log(user);

  useEffect(() => {
    getData();
  }, [getData]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Getting Name  & value", name, value);
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:3030/user/update-user/${param.id}`, user)
      .then((res) => {
        console.log(res, "Successfully");
        alert("User updated successfully")
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleUpdate}
        style={{
          width: "50%",
          margin: " 20px auto",
          border: "1px solid lightGrey",
          padding: "20px",
        }}
      >
        <label style={{ margin: "auto 10px auto auto" }}>Personal Name</label>
        <input
          type="text"
          name="personalName"
          onChange={(e) => handleChange(e)}
          placeholder="enter full name"
          value={user.personalName}
          style={{ margin: "15px auto" }}
        />
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>Email</label>
        <input
          type="email"
          name="emailId"
          onChange={(e) => handleChange(e)}
          placeholder="Enter email"
          value={user.emailId}
          style={{ margin: "15px auto" }}
        />
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>UserName</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => handleChange(e)}
          placeholder="enter user name"
          value={user.userName}
          style={{ margin: "15px auto" }}
        ></input>
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>Contact Info</label>
        <input
          type="number"
          name="contactInfo"
          onChange={(e) => handleChange(e)}
          placeholder="enter contact details"
          value={user.contactInfo}
          style={{ margin: "15px auto" }}
        ></input>
        <br />
        <label style={{ margin: "auto 10px auto auto" }}>
          upload profile picture
        </label>
        <input
          type="file"
          onChange={(e) => handleChange(e)}
          name="profilePicture"
          style={{ margin: "15px auto" }}

          //   value={user.profilePicture}
        ></input>
        <br />
        <input
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 25px",
          }}
        ></input>
      </form>
      <div style={{ margin: "20px auto auto auto" }}>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 25px",
          }}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;

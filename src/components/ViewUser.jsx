import React from "react";
import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const User = () => {
  const [User, setUser] = useState([]);
  const navigate = useNavigate()

  const getData = useCallback(async () => {
    await axios
      .get("http://localhost:3030/user")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log("Getting Error:", err);
      });
  }, []);
  console.log(User);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3030/user/delete-user/${id}`)
      .then((res) => {
        alert("Use want to delete the User")
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {User.map((ele) => (
        <div
          key={ele._id}
          style={{
            display: "flex",
            border: "1px solid lightGrey",
            width: "75%",
            margin: " 10px auto",
            padding: "10px",
            borderRadius: '10px',
            justifyContent: "space-evenly",
            alignItems: 'center'
          }}
        >
          <div>
            <p>Personal name : {ele.personalName}</p>
            <p>User name : {ele.userName}</p>
            <p>Email id : {ele.emailId}</p>
            <p>Contact Info : {ele.contactInfo}</p>
          </div>
          <div style={{ width: '10rem', height:'80%', border: '1px solid', borderRadius: '50%'}}>
            <img src={ele.profilePicture} alt="cover"  style={{width: '100%', height: '100%',borderRadius: '50%'}}/>
          </div>
          <div>
            <button style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px 25px",
            
          }} onClick={() => handleDelete(ele._id)}>Delete</button>
          </div>
          <div>
            <button style={{
            backgroundColor: "blue",
            color: "white",
            padding: "5px 25px",
          }} onClick={() => navigate(`/update-user/${ele._id}`)} >Update</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;

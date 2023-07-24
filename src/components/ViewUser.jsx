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
          <div style={{width: '20rem'}}>
            <p>Personal name : <span style={{color: 'blue'}}>{ele.personalName}</span></p>
            <p>User name : <span style={{color: 'blue'}}>{ele.userName}</span></p>
            <p>Email id : <span style={{color: 'blue'}}>{ele.emailId}</span></p>
            <p>Contact Info : <span style={{color: 'blue'}}>{ele.contactInfo}</span></p>
          </div>
          <div style={{ width: '10rem', height:'20vh',display:'flex', justifyContent:'center', alignItems:'center', border: '1px solid', borderRadius: '50%'}}>
            <img src={ele.profilePicture} alt="cov"  style={{width: '100%', height: '100%',borderRadius: '50%'}}/>
          </div>
          <div>
            <button style={{
            backgroundColor: "red",
            color: "white",
            padding: "15px 25px",
            border: 'none',
            borderRadius: '20px',
            cursor: "pointer"
          }} onClick={() => handleDelete(ele._id)}>Delete</button>
          </div>
          <div>
            <button style={{
            backgroundColor: "blue",
            color: "white",
            padding: "15px 25px",
            border: 'none',
            borderRadius: '20px',
            cursor: "pointer"
            
          }} onClick={() => navigate(`/update-user/${ele._id}`)} >Update</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;

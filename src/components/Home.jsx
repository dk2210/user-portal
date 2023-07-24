import React from "react";
import User from "./ViewUser";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

  return (
    <div>
        <div
      style={{
        border: "1px solid lightGrey",
        display: "flex",
        width: "73%",
        padding: "20px",
        margin: "2rem auto",
        borderRadius: "20px",
        justifyContent: "space-evenly",
        height: "7vh",
      }}
    >
      <button>Home</button>
      <button onClick={() => navigate('/add-user')}>Register User</button>
    </div>
    <User />

    </div>
    
  );
};

export default Home;

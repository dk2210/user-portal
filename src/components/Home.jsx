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
        <button
          style={{
            padding: "15px 25px",
            borderRadius: "15px",
            fontSize: "20px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: "pointer"
          }}
        >
          Home
        </button>
        <button
          style={{
            padding: "15px 25px",
            borderRadius: "15px",
            fontSize: "20px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: "pointer"
          }}
          onClick={() => navigate("/add-user")}
        >
          Register User
        </button>
      </div>
      <User />
    </div>
  );
};

export default Home;

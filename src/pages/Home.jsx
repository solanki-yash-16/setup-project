import { getAllUser } from "../api/users";
import React, { useEffect } from "react";

const Home = () => {
  const getUserData = async () => {
    try {
      const response = await getAllUser();
      if (response) {
        console.log("res", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return <div>Home Page</div>;
};

export default Home;

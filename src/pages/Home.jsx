import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "./../components/Announcement";
import Products from './../components/Products';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Products/>
    </div>
  );
};

export default Home;

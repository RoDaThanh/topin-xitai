import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "./../components/Announcement";
import Products from './../components/Products';
import Newsletter from './../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Products/>
      <Newsletter/>
    </div>
  );
};

export default Home;

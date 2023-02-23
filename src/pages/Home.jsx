import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "./../components/Announcement";
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import Sliceder from './../components/Sliceder';
import Categories from './../components/Categories';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Sliceder/>
      <Categories/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;

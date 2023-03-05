import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Customer from './../components/Customer';

const CustomerPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Customer/>
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default CustomerPage;

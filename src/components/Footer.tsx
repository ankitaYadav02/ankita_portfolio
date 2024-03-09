import React from "react";
import "../styles/base.css";

const Footer = () => {
  const today = new Date();
  return (
    <div className="bg-primary-3 text-center py-5">
      &copy; {today.getFullYear()} Ankita Yadav. All rights reserved.
    </div>
  );
};

export default Footer;

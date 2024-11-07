"use client";

import React, { useState } from "react"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function  HeaderFooter ({ children}) {
   
  return (
    <div className="w-full relative h-full">
        <Navbar />
         
              {children}
              
        <Footer   />
      </div>
     
  );
};
 

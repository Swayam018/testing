import React, { useEffect, useState } from "react";
import AutoWriteText from "../Components/AutoWriteText";
import SpalshScreen from "./SpalshScreen";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h4 style={{fontSize:"20px"}}>Hi,my name is</h4>
        <h1 style={{fontFamily:"Poppins",fontSize:"65px" ,lineHeight:"1px"}}>Swayam Sarthak Swain.</h1>
        <h1 style={{fontFamily:"Poppins",fontSize:"65px"}}>I build products with code</h1>
      </div>
    </div>
  );
}

export default Home;

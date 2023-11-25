import React, { useEffect, useState } from "react";
import AutoWriteText from "../Components/AutoWriteText";

function SpalshScreen() {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowBanner(false);
      }, 20800);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, []);
  
    const handleClose = () => {
      setShowBanner(false);
  };
  
  
  return (
      <div style={{ display: showBanner ? "block" : "none", position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#0a192f", zIndex: 999 }}>
      <div style={{ height:"74vh" }}>
      <AutoWriteText />
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>  
        <button onClick={handleClose} style={{ backgroundColor: "#64ffda", color: "#0a192f", padding: "10px 20px", cursor: "pointer" ,outline:"none" ,borderWidth:"0px"}}>
          Skip
        </button>
          </div>
    </div>
  );
}

export default SpalshScreen;

import React from "react";
import AutoWriteText from "../Components/AutoWriteText";

function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{height:"80vh"}}>
        <AutoWriteText />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{}}>Skip</button>
      </div>
    </div>
  );
}

export default Home;

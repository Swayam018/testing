import React from "react";
import Typewriter from "typewriter-effect";

function AutoWriteText() {
  return (
      <div className="autocontainer"  style={{padding:"100px 0px 0px 100px" ,height:"70%"}}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<strong id="typewriterid" style="color: #ccd6f6;font-size:20px;font-family:'Fira Mono' ,'Space Mono', monospace;"><span style="color:white">var</span><span style="color: #ccd6f6"> portfolio</span><span> = </span><span>{ </span></br><span class="paddingarray" style="padding-left: 47px;">name: </span><span style="color:#64ffda">'Swayam'</span>,</br><span class="paddingarray" style="padding-left: 47px;">occupation: </span><span style="color:#64ffda">'Web Developer'</span>,</br><span style="padding-left: 47px; " class="paddingarray">location: </span><span style="color:#64ffda">'Delhi'</span>,</br><span  style="padding-left: 47px;" class="paddingarray">skills:</span><span>[</span></br><span style="padding-left: 86px;color:#64ffda;">'React.js'</span>,</br><span style="padding-left: 86px;color:#64ffda;">'Node.js'</span></br><span style="padding-left:62px">]</span></br><span style="padding-left:0px">};</span></strong>`
              )
              .changeDelay(0.01)
              .start();
          }}
        />
      </div>
  );
}

export default AutoWriteText;

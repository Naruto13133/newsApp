import React, { useState } from "react";

export const SelectedNews = ({urlProp}) => {
  const [url, setUrl] = useState("https://www.example.com");
  console.log();
  return (
    <div>
      <iframe
        src={urlProp}
        
        frameBorder="0"
        allowFullScreen
        style={{
            borderRadius: "20px",
            borderWidth:"100px",
            borderColor:"black",
            position: "fixed",
            width: "100%",
            // height: "700px",
            gap: "100px",
            top: "50%",
            left: "50%",
            color: "red",
            transform: "translate(-50%, -50%)",
            p: 1,
            backgroundColor:"white",
          
            height:"100%"
        }}
      />
      {/* <button onClick={() => setUrl(urlProp)}>Change URL</button> */}
    </div>
  );
};

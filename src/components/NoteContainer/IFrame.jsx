import React, { useState } from "react";

export const IFrame = ({ urlProp }) => {
  const [url, setUrl] = useState("https://www.example.com");
  console.log(urlProp);
  return (
    <div>
      <iframe
        src={urlProp}
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <button onClick={() => setUrl(urlProp)}>Change URL</button>
    </div>
  );
};

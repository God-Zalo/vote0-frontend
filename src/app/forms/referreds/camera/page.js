"use client";

import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

export default function App() {
  const [uri, setUri] = useState(null);

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
    setUri(dataUri);
  }

  return (
    <div>
      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      />
      {uri && <img style={{ width: "500px", height: "200px" }} src={uri} />}
    </div>
  );
}

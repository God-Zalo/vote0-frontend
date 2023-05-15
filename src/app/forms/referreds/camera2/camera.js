"use client";

import React, { useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const sendToApi = async () => {
    debugger;
    const blob = await fetch(url).then((res) => res.blob());
    const formData = new FormData();

    //var file = new File([blob], "name");

    formData.append("image", blob, "imagensita.jpg");

    const response = await fetch("http://192.168.1.107:8000/api/mockimage/", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          alert("Saved");
        }
        console.log("res", res);
      })
      .catch((err) => {
        alert("error");
        console.log("err", err);
      });

    // const data = await response.json();
    // console.log(data);
  };

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
      <button onClick={capturePhoto}>Captaure</button>
      <br />
      <button onClick={() => setUrl(null)}>Refresh</button>
      <br />
      <button onClick={sendToApi}>Send</button>

      {url && (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
    </>
  );
};

export default Camera;

import React from "react";

function Video() {
  //const image1 = <img src''

  return (
    <div className="container">
      <div className="pform">
        <div className="screen">
          <iframe
            src=''
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width='100%'
            height='100%'
          />
        </div>
        <button className="playbtn">Play</button>
        <button className="resetbtn">Reset</button>
        <button className="pausebtn">Pause</button>
      </div>
    </div>
  );
}

export default Video;

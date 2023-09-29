import React from "react";

import video2 from "../asset/videos/test1.mp4";

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <video src={video2} width={400} controls autoPlay={true} />
    </div>
  );
}

export default About;

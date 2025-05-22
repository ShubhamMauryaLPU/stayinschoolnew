import React from "react";

const VideoContent = ({ video }) => {
  return (
    <div>
      <video
        controls
        loading="lazy"
      >
        <source src="https://www.youtube.com/embed/vzjBv6B0skk?si=ZDelq09Os38VcUBU" type="video/mp4" />
        <source src={video} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoContent;

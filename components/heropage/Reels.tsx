import React from "react";

const Reels = () => {
  return (
    <div className="my-16 max-w-full flex justify-between md:justify-start gap-5">
      <video
        className="aspect-[9/16] max-w-[40%] md:max-w-[25%] rounded-xl"
        autoPlay
        loop
        muted
        preload="auto" // Changed to 'auto' or can be removed
      >
        <source src="/photos/reel1.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Not Available
      </video>
      <video
        className="aspect-[9/16] max-w-[40%] md:max-w-[25%] rounded-xl"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src="/photos/reel2.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Not Availble{" "}
      </video>
    </div>
  );
};

export default Reels;
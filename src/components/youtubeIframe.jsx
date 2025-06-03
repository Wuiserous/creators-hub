import React from "react";

export default function YouTubeEmbed() {
  return (
    <div className="w-full block p-4 max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden ">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube Video"
        className="rounded-xl shadow-lg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

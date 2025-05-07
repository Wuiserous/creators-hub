import React from "react";

export default function YouTubeEmbed() {
  return (
    <div className="w-full p-4 max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

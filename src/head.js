import React,{useState,useEffect} from 'react';

function Head() {
  return (
    <head>
        <title>Movie</title>
        <link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet"/>
        <script src="https://unpkg.com/video.js/dist/video.js"></script>
        <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
    </head>
  );
}

export default Head;
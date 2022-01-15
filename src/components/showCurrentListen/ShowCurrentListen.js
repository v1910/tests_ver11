//ShowCurrentListen.js: show a word

import React from "react";

import ReactDOM from 'react-dom';

import { useSelector, useDispatch } from 'react-redux';

//import { vv } from "../../audio/vv.js";

import './ShowCurrentListen.css';



let currentAudio                               = null;

let path_audio                                 = '/audio/sound/mm.mp3';

export function ShowCurrentListen() {  //---------------------------------------

  console.log('ShowCurrentListen +++++++++++')     

  

  currentAudio                          = useSelector((store) => store.currentAudio);
 

  let dispatch = useDispatch();  


  let show_listen = (
    <div className="listen_cont_all">
      <div className='listen_body'>
        <div id="listen">
          <figure>
            <figcaption>Listen:</figcaption>
            <audio  
                  controls
                  src={path_audio}>
                      Your browser does not support the
                      <code>audio</code> element.
            </audio>
          </figure>
        </div>  
      </div>
      <div className="listen_button_cont">
        <button id="listen_button">See text</button>
      </div>
      <div id="listen_text">
          <p>Proba</p>
          <p>Proba</p>
          <p>Proba</p>
          <p>Proba</p>
          <p>Proba</p>
      </div>
    </div>
); 

  const el = document.getElementById('listen_wrapper');
  el.scrollIntoView({block: "start", behavior: "smooth"});

  return show_listen;

  
}//---end of ShowCurrentListen

/*

https://www.npmjs.com/package/node-vlc-http

var VLC = require('node-vlc-json');
var player = new VLC();
 
player.play('http://example.com/my_media.mp4', function() {
  player.status(function(res) {
    console.log(res.state);
  });
});


<embed type="application/x-vlc-plugin"
pluginspage="http://www.videolan.org"version="VideoLAN.VLCPlugin.2"  width="100%"        
height="100%" id="vlc" loop="yes"autoplay="yes" target="http://10.1.2.201:8000/"></embed>

https://www.npmjs.com/package/audio-play

https://www.youtube.com/watch?v=LW8F97qQzVE

  let show_listen = (
      <div className='body_listen'>
        <div id="listen">
          <figure>
            <figcaption>Listen to the T-Rex:</figcaption>
            <audio
                controls
                src={path_audio}>
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
          </figure>
        </div>  

      </div>
  ); 


<audio preload="none" controls>
   <source id="wav" src="http://example.com/non-existant.wav" />
   <source id="mp3" src="http://example.com/non-existant.mp3" />
   <source id="ogg" src="http://example.com/non-existant.ogg" />
</audio>


Skip to content
Why GitHub? 
Team
Enterprise
Explore 
Marketplace
Pricing 
Search
Sign in
Sign up
This repository has been archived by the owner. It is now read-only.
Afterster
/
videojs-vlc
Public archive
Code
Issues
7
Pull requests
1
Actions
Projects
Security
Insights
videojs-vlc/example.html
@Afterster
Afterster Add VLC Tech plug-in source code first version
Latest commit 349fd63 on Jan 10, 2015
 History
 1 contributor
48 lines (44 sloc)  1.16 KB
  
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Video.js VLC</title>

  <link href="node_modules/video.js/dist/video-js/video-js.css" rel="stylesheet">

  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .info {
      background-color: #eee;
      border: thin solid #333;
      border-radius: 3px;
      padding: 0 5px;
      text-align: center;
    }
    .video-js {
      margin: 40px auto;
    }
  </style>
  
  <script src="node_modules/video.js/dist/video-js/video.js"></script>
  <script src="lib/videojs-vlc.js"></script>
</head>
<body>
  <div class="info">
    <p>
      You can see the Video.js VLC plugin in action below.
      Look at the source of this page to see how to use it with your videos.
    </p>
  </div>
  <video id="video"
         class="video-js vjs-default-skin"
         height="300"
         width="600"
         controls
         data-setup='{ "techOrder": ["vlc"] }'>
    <p>
      Your browser doesn't support video. Please <a href="http://browsehappy.com/">upgrade your browser</a> to see the example.
    </p>
	
    <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
  </video>
</body>
</html>





*/
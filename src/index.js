import React from 'react';
import icon from './icon.png';

var spotify = require('spotify-node-applescript');

const order = 11;
const REGEXP = /s\s(.*)/;

const mediaPlayerPlugin = ({ term, display }) => {

  const match = term.match(REGEXP);

var trackinfo = (err, track) => {
  console.log("track info");
  console.log(err, track);
}

var isSRunning = (err, isRunning) => {
  console.log(isRunning);
}

  var acton = (term) => {
    console.log(term);
    spotify.isRunning(isSRunning);
    let thisterm = term.toLowerCase();
    if (thisterm === "play")
      spotify.play();
    else if (thisterm === "pause" || thisterm === "stop") {
      spotify.pause();
    } else if (thisterm === "track") {
      spotify.getTrack(trackinfo)
    } else if (thisterm === "previous") {
      spotify.previous()
    } else if (thisterm === "next") {
      spotify.next()
    } else if (thisterm === "toggle") {
      spotify.playPause()
    }
  }

  if (match) {
    display({
      id: 'mediaPlayer',
      icon,
      title: `Spotify ${term.substring(1)}`,
      onSelect: () => acton(term.substring(2))
    })
  }

}

export { mediaPlayerPlugin as fn };

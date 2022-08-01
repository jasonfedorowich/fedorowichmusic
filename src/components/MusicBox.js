import React, { Component } from 'react';

import notes from '../resources/8623-music-box-play.json'
import Lottie from 'lottie-react-web'


const MusicBox = () => (
    <Lottie
      options={{
        animationData: notes,
        loop: true
        
      }}
    />
  )

  export default MusicBox
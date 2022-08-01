import React, { Component } from 'react';

import notes from '../resources/88994-music-time.json'
import Lottie from 'lottie-react-web'


const MusicPup = () => (
    <Lottie
      options={{
        animationData: notes,
        loop: true
        
      }}
    />
  )

  export default MusicPup
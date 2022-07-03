import React, { Component } from 'react';

import notes from '../resources/27209-music-notes.json'
import Lottie from 'lottie-react-web'


const MusicNotes = () => (
    <Lottie
      options={{
        animationData: notes,
        loop: true
        
      }}
    />
  )

  export default MusicNotes
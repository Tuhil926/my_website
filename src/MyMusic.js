import React from 'react'

const Song = ({ videoSrc, name }) => {
  return (
    <div className='song'>
      {videoSrc && <iframe src={videoSrc}></iframe>}
      <h2>{name}</h2>
    </div>
  )
}

function MyMusic() {
  return (
    <div className='music nav-page'>
      <Song
        videoSrc={'https://www.youtube.com/embed/amYjH5QsNvA'}
        name={'Intransience'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/ptZIWSEZUQM'}
        name={'Train of Thought'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/GvBOzXDj-HI'}
        name={'Time go Slower'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/p_udcXzn7cw'}
        name={'Trig'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/i824bB6OC40'}
        name={'Fair and Square'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/YIMhsXRrC3E'}
        name={'One Way'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/Eb6myE3F1f8'}
        name={'Glow'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/hBY4s0ATc8U'}
        name={'Just a Little More Synth'}
      />
      <Song
        videoSrc={'https://www.youtube.com/embed/Unv2DxZ2I-s'}
        name={'The Bright Star'}
      />
    </div>
  )
}

export default MyMusic

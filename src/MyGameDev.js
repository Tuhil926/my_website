import React from 'react'

const Game = ({
  name,
  videoSrc,
  imgSrc,
  description,
  sourceLink,
  downloadLink,
}) => {
  return (
    <div className='game'>
      <h2>{name}</h2>
      {imgSrc !== undefined && (
        <img
          src={imgSrc}
          alt="There's supposed to be an image here ¯\_(ツ)_/¯"
        ></img>
      )}
      <div className='buttons'>
        <a
          href={sourceLink}
          style={
            (sourceLink === undefined && {
              opacity: '50%',
              cursor: 'not-allowed',
            }) ||
            {}
          }
        >
          Source code
        </a>
        <a
          href={downloadLink}
          style={
            (downloadLink === undefined && {
              opacity: '50%',
              cursor: 'not-allowed',
            }) ||
            {}
          }
        >
          Play/Download
        </a>
      </div>
      {videoSrc && <video src={videoSrc}></video>}
      <label>{description}</label>
    </div>
  )
}

function MyGameDev() {
  return (
    <div className='game-dev nav-page'>
      <Game
        name={'Dodge The Blocks'}
        description={
          'First game I made in Unity. I followed the tutorial made by brackeys to make \
          this one. I made the levels myself though, and its quite hard to beat. Give it a \
          try if you want! I bet you cant beat level 7 lol.'
        }
        imgSrc={''}
        downloadLink={'https://tuhil.itch.io/dodge-the-blocks'}
      />
      <Game
        name={'Bouncy Ball'}
        description={
          "This is the second game I made in unity. I made it myself, inspired by the classic\
           game of pong. However, I added some more functionality - you can press left and right\
            to kind of boost the ball faster, and you can even adjust the maximum ball speed to\
             your liking. You can play it with your friend on the same computer by using wasd and\
              arrow keys, or you can play with an AI opponent that's pretty hard to beat (its not \
              actually AI, its just an algorithm)"
        }
        imgSrc={''}
        downloadLink={'https://tuhil.itch.io/Bouncy-Ball'}
      />
      <Game />
      <Game />
      <Game />
      <Game />
    </div>
  )
}

export default MyGameDev

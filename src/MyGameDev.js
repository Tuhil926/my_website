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
      {videoSrc && (
        <video controls>
          <source src={videoSrc} />
        </video>
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
        imgSrc={'dodge_the_blocks.png'}
        downloadLink={'https://tuhil.itch.io/dodgetheblocks'}
      />
      <Game
        name={'Bouncy Ball 2'}
        description={
          "This is the second game I made in unity. I made it myself, inspired by the classic\
           game of pong. However, I added some more functionality - you can press left and right\
            to kind of boost the ball faster, and you can even adjust the maximum ball speed to\
             your liking. You can play it with your friend on the same computer by using wasd and\
              arrow keys, or you can play with an AI opponent that's pretty hard to beat (its not \
              actually AI, its just an algorithm)"
        }
        imgSrc={'bouncy_ball_2.jpg'}
        downloadLink={'https://tuhil.itch.io/bouncy-ball-2'}
      />
      <Game
        name={"Some survival game.. didn't name it yet"}
        description={
          "It's kind of like minecraft, but in 2d. I'm making it in rust, using a game engine called bevy. I haven't finished it, but so far, you can \
          explore an infinite world, the chunks are loaded and unloaded dynamically, and there \
          are a few redstone-like blocks that you can place. For example, the wire can carry a \
          signal, the inverter inverts the signal coming in, the repeater repeats the signal. And \
          the stone block just gives off a full signal strength. In the image above, I made a t-flip \
          flop, one of the important building blocks of electronics. So now that the game is fully \
          turing complete, I need to add some actual gameplay content to it."
        }
        videoSrc={'survival_game_vid.webm'}
        sourceLink={'https://github.com/Tuhil926/bevy_game_4'}
      />
    </div>
  )
}

export default MyGameDev

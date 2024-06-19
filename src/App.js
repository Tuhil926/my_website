import { useEffect, useState } from 'react'
import './App.css'
import MainApp from './MainApp'
import Notification from './Notification'

const Cover = ({ is_right, y, text, classNm }) => {
  var offset = y
  if (offset < 0) offset = 0
  return (
    <div
      className={classNm}
      style={{
        width: 50 - offset + '%',
        right: (!is_right && 'auto') || (is_right && '0px'),
        flexDirection: (!is_right && 'row-reverse') || (is_right && 'row'),
        // borderRadius:
        //   (!is_right && '0em ' + offset + '% ' + offset + '% 0em') ||
        //   (is_right && offset + '% 0 0 ' + offset + '%'),
      }}
    >
      <h1>{text}</h1>
    </div>
  )
}

const SCROLL_SPEED = 10

function App() {
  const [y, setY] = useState(0)
  const [notificationVisible, setNotificationVisible] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const inc_y = (event) => {
    if (event.deltaY > 0) {
      setY((prev) => {
        const ret = prev + SCROLL_SPEED
        if (ret > 190) return 190
        return ret
      })
      if (!scrolled) {
        setNotificationVisible(false)
        setScrolled(true)
      }
    } else
      setY((prev) => {
        if (prev === 0) return 0
        if (prev === 190) return 190
        return prev - SCROLL_SPEED
      })
    // console.log(y)
  }
  useEffect(() => {
    window.addEventListener('wheel', inc_y)
    return () => {
      window.removeEventListener('wheel', inc_y)
    }
  })

  const next_slide = (e) => {
    console.log(e.key)
    if (e.key === ' ') {
      setY((prev) => {
        if (prev < 50) return 50
        else if (prev < 70) return 120
        else return 190
      })
      if (!scrolled) {
        setNotificationVisible(false)
        setScrolled(true)
      }
    } else if (e.key === 'b') {
      setY((prev) => {
        if (prev >= 190) return 120
        else if (prev >= 120) return 70
        else return 0
      })
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', next_slide)
    return () => {
      window.removeEventListener('keydown', next_slide)
    }
  })
  useEffect(() => {
    setTimeout(() => {
      setScrolled((prev) => {
        if (!prev) {
          setNotificationMessage('You can scroll or press space btw')
          setNotificationVisible(true)
        }
        return prev
      })
    }, 3000)
  }, [])
  return (
    <div className='main-bg'>
      <Cover
        is_right={0}
        y={y - 140}
        text='And this is'
        classNm='cover cover3'
      />
      <Cover
        is_right={1}
        y={y - 140}
        text='My website'
        classNm='cover cover3'
      />
      <Cover is_right={0} y={y - 70} text="I'm" classNm='cover cover2' />
      <Cover is_right={1} y={y - 70} text='Tuhil' classNm='cover cover2' />
      <Cover is_right={0} y={y} text='Hello' classNm='cover cover1' />
      <Cover is_right={1} y={y} text='There' classNm='cover cover1' />
      <Notification
        message={notificationMessage}
        isVisible={!notificationVisible && 'hidden'}
      />
      <MainApp></MainApp>
    </div>
  )
}

export default App

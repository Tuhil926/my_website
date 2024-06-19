import React, { useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import AboutMe from './AboutMe'
import MyGameDev from './MyGameDev'
import MyMusic from './MyMusic'

function MainApp() {
  const [currSel, setCurrSel] = useState(0)
  return (
    <div className='mainapp'>
      <NavBar currSel={currSel} setCurrSel={setCurrSel} />
      {currSel === 0 && <Home />}
      {currSel === 1 && <AboutMe />}
      {currSel === 2 && <MyGameDev />}
      {currSel === 3 && <MyMusic />}
    </div>
  )
}

export default MainApp

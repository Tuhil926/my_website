import React from 'react'

const Item = ({ currSel, setCurrSel, index, text }) => {
  return (
    <div
      onClick={() => {
        setCurrSel(index)
      }}
      style={{
        backgroundColor: currSel === index && '#0000',

        // borderTopLeftRadius: '1em',
        // borderTopRightRadius: '1em',
        //   borderBottomLeftRadius: currSel !== index && '1em',
        //   borderBottomRightRadius: currSel !== index && '1em',
        borderBottomRightRadius: currSel === index + 1 && '1em',
        borderBottomLeftRadius: currSel === index - 1 && '1em',
      }}
    >
      {text}
    </div>
  )
}

function NavBar({ currSel, setCurrSel }) {
  return (
    <div className='navbar'>
      <Item currSel={currSel} setCurrSel={setCurrSel} index={0} text={'Home'} />
      <Item
        currSel={currSel}
        setCurrSel={setCurrSel}
        index={1}
        text={'About me'}
      />
      <Item
        currSel={currSel}
        setCurrSel={setCurrSel}
        index={2}
        text={'My Game dev'}
      />
      <Item
        currSel={currSel}
        setCurrSel={setCurrSel}
        index={3}
        text={'My Music'}
      />
      {/* <Item
        currSel={currSel}
        setCurrSel={setCurrSel}
        index={3}
        text={'Some other stuff idk'}
      /> */}
    </div>
  )
}

export default NavBar

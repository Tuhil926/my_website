import React from 'react'

function Notification({ message, isVisible }) {
  return (
    <div
      className='notification'
      style={{
        opacity: isVisible ? '0%' : '100%',
        // display: isVisible ? 'block' : 'none',
        top: isVisible && '-3em',
      }}
    >
      {message}
    </div>
  )
}

export default Notification

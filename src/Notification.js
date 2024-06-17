import React from 'react'

function Notification({ message, isVisible }) {
  return (
    <div
      className='notification'
      style={{ opacity: isVisible ? '0%' : '100%' }}
    >
      {message}
    </div>
  )
}

export default Notification

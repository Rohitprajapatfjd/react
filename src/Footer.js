import React from 'react'

const Footer = () => {
    let call ={
      backgroundColor: "Black",
      color: "White",
      position:"relative",
      width: "100%",
      top: "36vh",
      padding: "2px"
    }
  return (
    <div>
      <footer style={call}>
        <p className='text-center'>  &copy; copyright All rights Reserved</p>
      </footer>
    </div>
  )
}

export default Footer

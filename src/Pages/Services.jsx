import React from 'react'

function Services() {
  return (
    <>
     <div className="navbar">
        <div>
          {/* logo */}
          {/* inline, internal, external */}
          {/* inline, external */}
          <img
          className="logo"
            src="https://cdn.pixabay.com/photo/2019/11/26/17/34/helicopter-4655049_640.jpg"
            alt=""
          />
        </div>
        <div className="items">
          {/* nav items */}
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <h1>Services Page</h1>  
    </>
  )
}

export default Services
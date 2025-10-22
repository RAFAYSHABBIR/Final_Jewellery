import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/hP4KBzn8GTUPQkUCPudXkY/logo2.png"
            alt="Logo"
            className="h-16"
          />
        </Link>
        <Link to="/" className="flex items-center">
          <img
            src="https://uploadthingy.s3.us-west-1.amazonaws.com/oZ6pbdZ31QdUDzhxyaC8WN/logo1.jpg"
            alt="Hyde Park Design Logo"
            className="h-16"
          />
        </Link>
      </div>
    </header>
  )
}
export default Header

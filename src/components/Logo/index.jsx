import React from 'react'

export const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="MovieApp Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        MovieApp
      </span>
    </a>
  )
}

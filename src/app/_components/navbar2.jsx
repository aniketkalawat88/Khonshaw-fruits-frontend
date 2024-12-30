/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Navbar2() {
  return (
    <div>
        <header className="bg-secondary-main/80 text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-4 md:px-0 px-2">
            <div className="flex items-center md:space-x-4 max-md:justify-between w-full">
              <div className='space-x-2'>
                <i className="fas fa-phone-alt"></i>
                <span>+91 92262 63836</span>
              </div>
              <div className='space-x-2'>
                <i className="fas fa-envelope"></i>
                <span>info@raktrading.co.in</span>

              </div>
            </div>
            <div className="md:flex space-x-4 hidden">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </header>
        {/* Navigation */}
        <nav className="bg-secondary-main text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center md:py-4 py-2 md:px-0 px-2 ">
            <div className="flex items-center">
               <img
                  alt="Company Logo"
                  className="h-14 object-contain"
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=174,fit=crop,q=95/AGB4ykaxK8TJ7bpG/asset-3-copy-YBg4ZJ0GOMUgkPBl.jpg"
                />
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link className="hover:text-gray-300" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/about-us">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/products">
                  Product
                </Link>
              </li>
              {/* <li>
                <Link className="hover:text-gray-300" href="/contact-us">
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
    </div>
  )
}

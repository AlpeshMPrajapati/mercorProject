import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between gap-10'>
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="nav-items">
        <ul className='text-white flex items-center gap-7 flex-wrap sm:text-xs'>
          <li><a href="/">SIGN IN</a></li>
          <li><a href="/">LEGAL</a></li>
          <li><a href="/">lICENSES</a></li>
          <li><a href="/">SECURITY</a></li>
          <li><a href="/">CAREERS</a></li>
          <li><a href="/">PRESS</a></li>
          <li><a href="/">SUPPROT</a></li>
          <li><a href="/">STATUS</a></li>
          <li><a href="/">CODEBLOG</a></li>
        </ul>
      </div>
      <div className="logo">
        <img src="/Layer 2.png" alt="" />
      </div>
    </div>
  )
}

export default Header
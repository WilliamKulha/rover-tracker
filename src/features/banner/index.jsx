import React from 'react'
import './styles.scss'
import HamburgerMenu  from './menuHamburger/index'

export const Banner = () => (
  <header>
    <h1 className="logo">Rover Tracker</h1>
    <div className="ham-wrapper">
      <HamburgerMenu />
    </div>
  </header>
)
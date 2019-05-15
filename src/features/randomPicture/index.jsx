import React from 'react'
import './styles.scss'

export const RandomPicture = props => (
  <div className="random-picture-wrapper">
    <img className="random-picture" src={props.image.img_src} alt="A random recent photo from the Curiosity Rover"/>
  </div>
)


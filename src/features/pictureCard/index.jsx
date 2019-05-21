import React from 'react'
import './styles.scss'

export const PictureCard = props => (
  <div className="card-wrapper">
    <div className="image">
      <img src={props.image.img_src} alt={"From " + props.image.rover.name + "'s " + props.image.camera.name + " camera" }/>
    </div>
    <div className="description">
      <h3>{props.image.rover.name}</h3>
      <ul className={props.image.img_src.naturalHeight < 200 ? "small" : "normal" }>
        <li>{props.image.earth_date}</li>
        <li>{props.image.camera.full_name}</li>
        <li>{props.image.sol} days on Mars</li>
      </ul>
    </div>

  
  </div>
)
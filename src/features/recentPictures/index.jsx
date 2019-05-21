import React from 'react'
import { PictureCard } from '../pictureCard/index'
import { connect } from 'react-redux'
import './styles.scss'

const RecentPictures = ({images}) => {
  return (
  <div className="recent-pictures-wrapper">
    {
        images.map((photo => 
        <PictureCard image={photo} />
      ))
    }
  </div>
  )
}

const mapStateToProps = state => {
  return {
    images : state.masterList
    }
}

export default connect(mapStateToProps)(RecentPictures);
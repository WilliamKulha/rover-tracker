import React, { Component } from 'react'
import './styles.scss'

class HamburgerMenu extends Component {
  constructor() {
    super()
    this.state = {
      isOpen : false
    }
  }

  toggle = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      })
    } else {
      this.setState({
        isOpen: true
      })
    }
  }

  render() {
    return (
      <div className="hamburger-wrapper">
        <div className={"circle icon " + (this.state.isOpen ? "open" : "closed")} onClick={this.toggle}>
          <span className="line top" />
          <span className="line middle" />
          <span className="line bottom" />
        </div>
      </div>
    )
  }

}

export default HamburgerMenu

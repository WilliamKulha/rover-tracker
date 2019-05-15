import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunk_fetch_master_list } from './actions/fetchListAction'
import {INITIAL_URL} from './config/constants'
import './App.css';
import { RandomPicture } from './features/randomPicture/index'
import { LoadingSpinner } from './features/loadingSpinner/index'
import { Banner } from './features/banner/index'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(thunk_fetch_master_list(INITIAL_URL))
  }



  render() {
    console.log(this.props)
    return (  
      <div className="App">
        <Banner />
        <RandomPicture image={this.props.masterList.featuredPhoto} />
      </div>
    )

  }

}

const mapStateToProps = state => {
  return {
    masterList : state
  }
}

export default connect(mapStateToProps)(App);

import React from 'react'

import { withRouter } from 'react-router-dom'

import TopNavigation from './TopNavigation'
import TweetsList from './TweetsList'

import Alert from 'react-s-alert'
import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'

class AppBase extends React.Component {

  render() {
    return (
      <div className='app' id='app'>
        <TopNavigation {...this.props} />
        <TweetsList />
        <Alert stack={{limit: 3}} />
      </div>
    )
  }
}
const App = withRouter(AppBase)

export default App


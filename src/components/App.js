import React from 'react'

import { withRouter } from 'react-router-dom'

import TopNavigation from './TopNavigation'
import List from './List'

class AppBase extends React.Component {

  render() {
    return (
      <div className='app' id='app'>
        <TopNavigation {...this.props} />
        <List />
      </div>
    )
  }
}
const App = withRouter(AppBase)

export default App


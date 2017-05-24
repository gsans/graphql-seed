import React from 'react'

class TopNavigation extends React.Component {

  render() {
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2 col-xs-1' />
            <div className='col-md-8 col-xs-10'>
              <div className='centerBlock app-title'>
                GraphQL Seed <span role="img" aria-label="donut">🍩</span>
              </div>
            </div>
            <div className='col-md-2 col-xs-1' />
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNavigation

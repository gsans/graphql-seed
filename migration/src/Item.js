import React from 'react'
import PropTypes from 'prop-types'

class Item extends React.Component {

  render() {
    return (
      <li>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-body'>
              {this.props.item.body}</div>
          </div>
        </div>
      </li>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Item

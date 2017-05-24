import React from 'react';
import PropTypes from 'prop-types';

const Item = ({item}) => (
  <li>
    <div className='row'>
      <div className='col-md-12'>
        <div className='text-body'>
          {item.body}</div>
      </div>
    </div>
  </li>
);

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item

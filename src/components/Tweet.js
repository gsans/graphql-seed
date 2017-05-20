import React from 'react'
import PropTypes from 'prop-types'
import { DEFAULT_PROFILE_PIC } from '../utils/helpers'
import TimeAgo from 'react-timeago'
import TweetParser from './TweetParser'

class Tweet extends React.Component {

  formatter(value, unit, suffix, date, defaultFormatter) {
    console.log(value, unit, suffix, date)
    if (unit === 'second' && value < 60) {
      return 'just now'
    }
    return defaultFormatter(value, unit, suffix, date)
  }

  render() {
    return (
      <li>
        <div className='row'>
          <div className='col-md-12'>
            <div className='text-body'>
              <TweetParser parseUsers parseUrls hashtagClass={'twitter'} urlClass={'twitter'} userClass={'twitter'} >{this.props.tweet.text}</TweetParser></div>
            <div className='profile-container'>
              <div className='profile-small'>
                <img src={this.props.tweet.postedBy &&this.props.tweet.postedBy.profile_image_url || DEFAULT_PROFILE_PIC} />
              </div>
              <div className='profile-small-text'>by {this.props.tweet.postedBy? `@${this.props.tweet.postedBy.screen_name}` : '@happylama'}
                <span className='hidden-xs'>, <TimeAgo date={new Date(this.props.tweet.created*1000)} formatter={this.formatter} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
}

export default Tweet

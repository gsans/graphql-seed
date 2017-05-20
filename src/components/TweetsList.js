import React from 'react'
import Tweet from './Tweet'
import { graphql } from 'react-apollo'
import Loading from './Loading'

import TWEETS_QUERY from '../graphql/Tweets.query.gql'

class TweetsList extends React.Component {

  refetch() {
    this.props.data.refetch()
  }

  isEmpty() {
    return (!this.props.loading && (!this.props.tweets ||
      this.props.tweets && (this.props.tweets.length===0)))
  }

  refresh() {
    if (!this.isEmpty() && !this.props.loading) {
      return (
        <ul>
          <li>
            <div className='centerBlock'>
              <button className='btn btn-primary' onClick={() => this.refetch()}>Refresh</button>
            </div>
          </li>
        </ul>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <div className='list'>
        <ul>
          { this.props.tweets && this.props.tweets.map((t, i) =>
            <Tweet
              key={i}
              tweet={t}
            />
          )}
        </ul>
        {this.refresh()}
        {this.isEmpty()? <div className='centered text-body'>There are no tweets.</div> : null }
        {this.props.loading ? <Loading /> : null}
        <section id='bottom' />
      </div>
    )
  }
}

const withTweets = graphql(TWEETS_QUERY,
  {
    props: ({ data }) => {
      if (data.loading) return { loading: true }
      if (data.error) return { hasErrors: true }
      return {
        tweets: data.Tweet,
        data,
      }
    },
  },
)

export default withTweets(TweetsList)

import React from 'react'
import Item from './Item'
import { graphql } from 'react-apollo'
import Loading from './Loading'

import LIST_QUERY from '../graphql/List.query.gql'

class List extends React.Component {

  refetch() {
    this.props.data.refetch()
  }

  isEmpty() {
    return (!this.props.loading && (!this.props.list ||
      this.props.list && (this.props.list.length===0)))
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
          { this.props.list && this.props.list.map((item, i) =>
            <Item key={i} item={item} />
          )}
        </ul>
        {this.refresh()}
        {this.isEmpty()? <div className='centered text-body'>There are no entries.</div> : null }
        {this.props.loading ? <Loading /> : null}
        <section id='bottom' />
      </div>
    )
  }
}

const withList = graphql(LIST_QUERY,
  {
    props: ({ data }) => {
      if (data.loading) return { loading: true }
      if (data.error) return { hasErrors: true }
      return {
        list: data.allQuestions,
        data,
      }
    },
  },
)

export default withList(List)

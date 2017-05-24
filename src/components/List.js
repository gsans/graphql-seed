import React from 'react';
import Item from './Item';
import {gql, graphql} from 'react-apollo';
import Loading from './Loading';
import PropTypes from 'prop-types';

class List extends React.Component {

  refetch() {
    this.props.data.refetch()
  }

  isEmpty() {
    const {loading, list} = this.props;
    return !loading && (!list || (list && list.length === 0))
  }

  refresh() {
    if (this.isEmpty() && this.props.loading) {
      return null
    }

    return (
      <ul>
        <li>
          <div className='centerBlock'>
            <button className='btn btn-primary' onClick={() => this.refetch()}>Refresh</button>
          </div>
        </li>
      </ul>
    )
  }

  render() {
    const {list, loading} = this.props;
    return (
      <div className='list'>
        <ul>
          {
            list && list.map((item, i) =>
              <Item key={i} item={item}/>
            )
          }
        </ul>
        {this.refresh()}
        {
          this.isEmpty()
            ? <div className='centered text-body'>There are no entries.</div>
            : null }
        {loading ? <Loading /> : null}
        <section id='bottom'/>
      </div>
    )
  }
}

List.propTypes = {
  loading: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired
  })),
  data: PropTypes.shape({
    refetch: PropTypes.func.isRequired
  })
};

const withList = graphql(
  gql`
      query questions {
          allQuestions {
              id body
          }
      }
  `,
  {
    props: ({data}) => {
      if (data.loading) return {loading: true}
      if (data.error) return {hasErrors: true}
      return {
        list: data.allQuestions,
        data,
      }
    },
  },
)

export default withList(List)

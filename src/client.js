import ApolloClient, { createNetworkInterface } from 'apollo-client'

const networkInterface = createNetworkInterface({
  uri: 'http://graphql.communitygraph.org/graphql/',
  dataIdFromObject: record => record.id,
})

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    req.options.headers.authorization = 'Basic Z3JhcGhxbDpncmFwaHFs'
    next()
  },
}])

export const client = new ApolloClient({
  networkInterface,
})

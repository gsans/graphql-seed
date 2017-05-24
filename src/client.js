import ApolloClient, {createNetworkInterface} from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'GRAPHCOOL_SIMPLE_ENDPOINT',
  dataIdFromObject: record => record.id,
})

export const client = new ApolloClient({
  networkInterface,
})

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from './client';
import './index.css';

function filter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_FILTER') {
    return action.filter;
  }
  return state;
}

const combinedReducer = combineReducers({
  filter,
  apollo: client.reducer(),
});

const store = compose(
  applyMiddleware(client.middleware()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(combinedReducer);

class AppWrapper extends React.Component {
  render() {
    return <App client={client} />;
  }
}

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <HashRouter>
      <Route path="/" component={AppWrapper} />
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import routeConfig from './routeConfig';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'; // override baseURL

async function serverRender(req) {
  const store = configureStore(); // create store for every request

  // TODO: handle requests
  const promises = [];
  const { url, path } = req;

  routeConfig.forEach(route => {
    const match = matchPath(path, route);
    // { path: '/repo', url: '/repo', isExact: true, params: {} }
    if (match && route.component.preload) {
      // pass URL params, and req,
      // you can access to header, cookie, query, etc via req.
      const p = route.component.preload(store, match.params, req);
      promises.push(p);
    }
  });

  let error = null;
  try {
    await Promise.all(promises);
  } catch (e) {
    error = e;
  }

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return {
    html,
    state: store.getState(),
    error
  };
}

export default serverRender;

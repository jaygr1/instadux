import React from 'react';

import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//commenting out Raven stuff because I don't want to go sign up for my own key right now

// import Raven from 'raven-js';
// import { sentry_url, logException } from './data/config';
//
// Raven.config(sentry_url).install();
//
// // cool (below) has a pop up that lets user add info that will be attached to Sentry info
// Raven.showReportDialog();

//react router
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))

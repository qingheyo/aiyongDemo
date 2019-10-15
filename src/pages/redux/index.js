import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createStoreWithMdware from './store/index';

import routes from './routes';
import reducers from './reducers/index';


/**
    @author 
* */
const store = createStoreWithMdware(reducers);
const history = syncHistoryWithStore(hashHistory, store);


ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('container'),
);

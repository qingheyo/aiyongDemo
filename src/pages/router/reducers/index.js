

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Demo from '../containers/demo/reducer';
import Demo1 from '../containers/demo1/reducer';
import Demo2 from '../containers/demo2/reducer';

// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
    Demo,
    Demo1,
    Demo2,
    routing: routerReducer,
});

export default rootReducer;

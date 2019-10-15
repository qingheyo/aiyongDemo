import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Calculator from '../containers/calculator/reducer';
import Log from '../containers/log/reducer';
import Income from '../containers/income/reducer';

// 将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
    Calculator,
    Log,
    Income,
    routing: routerReducer,
});

export default rootReducer;

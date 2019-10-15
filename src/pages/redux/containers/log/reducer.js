import { GET_DATA } from './action';

const initialState = { data: [] };
const defaultAction = { type: 'doNothing' };

/**
 * 计算器历史reducer
 */
export default function index(state = initialState, action = defaultAction) {
    switch (action.type) {
    case GET_DATA:
        return {
            ...state,
            data: action.res,
        };
    default:
        return state;
    }
}

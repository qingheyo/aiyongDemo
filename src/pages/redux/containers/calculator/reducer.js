/* eslint-disable no-eval */
import { CLICK_KEY, CLICK_OP, CLICK_EQUAL } from './action';

// 对页面prop 数据进行管理
const initialState = {
    // 屏幕数字
    total: '0',
    // loading事件隐藏
    isShow: false,
    // 等号计算是否完成
    isClear: false,
    // 查询参数
    calc: '',
    calcRes: '',
};
const defaultAction = { type: 'doNothing' };

/**
 * 计算器reducer
 */
export default function index(state = initialState, action = defaultAction) {
    const { total, isClear } = state;
    const { payload } = action;
    switch (action.type) {
    case CLICK_KEY: {
        if (total === '0' || isClear === true) {
            return {
                ...state,
                total: payload,
                isClear: false,
            };
        }
        return {
            ...state,
            total: total + payload,
        };
    }
    case CLICK_OP: {
        switch (payload) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (total.charAt(total.length - 1) === '+' || total.charAt(total.length - 1) === '-' || total.charAt(total.length - 1) === '*' || total.charAt(total.length - 1) === '/') {
                return {
                    ...state,
                    total: total.substring(0, total.length - 1) + payload,
                    isClear: false,
                };
            }
            return {
                ...state,
                total: total + payload,
                isClear: false,
            };


        case '+/−': {
            return {
                ...state,
                total: -eval(total).toString(),
            };
        }
        case '%': {
            return {
                ...state,
                total: eval(`${total}*0.01`).toString(),
            };
        }
        case 'AC': {
            return {
                ...state,
                total: '0',
            };
        }
        case '=': {
            return {
                ...state,
                isShow: true,
                calc: total,
                calcRes: eval(total),
            };
        }
        default:
            return state;
        } }
    case CLICK_EQUAL: {
        return {
            ...state,
            total: eval(total).toString(),
            isClear: true,
            isShow: false,
        };
    }
    default:
        return state;
    }
}

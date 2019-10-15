import { nameSpace } from 'utils/index';


const ns = nameSpace('calculator');
export const CLICK_KEY = ns('CLICK_KEY');
export const CLICK_EQUAL = ns('CLICK_EQUAL');
export const CLICK_OP = ns('CLICK_OP');

/**
 * 按键
 */
export const clickKey = res => ({ type: CLICK_KEY, payload: res });
/**
 * 运算符操作
 */
export const clickOp = res => ({ type: CLICK_OP, payload: res });

/**
 * 将计算结果存入数据库
 */
export function clickEqual(calc, calcRes) {
    return (dispatch) => {
        fetch('http://dhb:8081/test.php', {
            method: 'POST',
            mode: 'no-cors',
            body: new URLSearchParams({
                calc,
                calcRes,
            }),
        }).then(dispatch({ type: CLICK_EQUAL }));
    };
}

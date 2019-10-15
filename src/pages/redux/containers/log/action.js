import { nameSpace } from 'utils/index';

const ns = nameSpace('log');
export const GET_DATA = ns('GET_DATA');

/**
 * 计算器历史
 */
export const getLog = res => ({ type: GET_DATA, res });

/**
 * 数据库获取数据
 */
export function getData() {
    return (dispatch) => {
        fetch('http://dhb:8081/test.php', { method: 'GET' })
            .then(res => res.json()).then((res) => {
                dispatch(getLog(res));
            });
    };
}

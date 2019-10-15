

import { ajax, nameSpace } from 'utils/index';


const ns = nameSpace('Demo');
export const CLICK_DEMO = ns('CLICK_DEMO');

export function clickDemo() {
    return (dispatch, getState) => {
        // console.log(getState());
        let { counter } = getState().Demo;
        console.log(counter);
        ajax({
            api: 'page2List',
            method: 'GET',
        }, (json) => {
            // ajax请求成功
            console.log(json);
            dispatch({
                type: CLICK_DEMO,
                data: { counter: ++counter },
            });
        }, (json) => {
            // ajax请求失败
            console.log('no');
        });
    };
}

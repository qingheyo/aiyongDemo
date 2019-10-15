
import reqwest from 'reqwest';
import apimap from './apimap';
/* apienv的可选值 local,development,production */
const apienv = window.apienv || 'local';
const Tools = {
    /**
     * @param {*} param
     * @param {*} suc
     * @param {*} err
     */
    ajax(param, suc, err) {
    /* 在demo html中修改window.apienv实现不同环境的数据接口切换 */
        param.url = apimap[apienv][param.api];
        param.type = 'json';
        const startTime = new Date().getTime();
        return reqwest(param).then((res) => {
            const endTime = new Date().getTime();
            if (res.code === 200) { // 默认接口请求成功的判断条件，可以自行修改,也可以按照自己约定来做判断
                suc && suc(res);
                console.log('接口请求成功', res);
            } else { // 在这里可以统一自定义错误返回码异常处理
                // TODO:接口统一异常处理
                err && err(res);
                console.error('接口请求失败', res);
            }
            return res;
        }).catch((error) => { // 接口异常处理，返回response.status 非20x或者1223时会进入这里
            const endTime = new Date().getTime();
            throw new Error(`接口${param.api}调用失败！服务端异常！${error.message}`);
        });
    },
    /**
     *
     */
    isLocal() {
        const { host } = window.location;
        return host.indexOf('127.0.0.1') > -1 || host.indexOf('localhost') > -1;
    },
    /**
     *
     */
    getUrlParam(name) {
        const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
        const r = decodeURIComponent(window.location.search.substr(1)).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    /**
     *
     */
    isArray(object) {
        return object instanceof Array;
    },
    /**
     *
     */
    isWindow(obj) {
        return obj != null && obj == obj.window;
    },
    /**
     *
     */
    isDocument(obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    },
    isObject(obj) {
        return this._type(obj) == 'object';
    },
    isFunction(fn) {
        return this._type(fn) == 'function';
    },
    isPlainObject(obj) {
        return this.isObject(obj) && !this.isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
    },
    _type(obj) {
        const class2type = {};
        const { toString } = class2type;
        return obj == null ? String(obj)
            : class2type[toString.call(obj)] || 'object';
    },
    isString(str) {
        return typeof str === 'string';
    },
    extend(target, source) {
        target = target || {};
        source = source || {};
        for (const key in source) {
            target[key] = source[key];
        }
        return target;
    },
    namespace(name) {
        return function (v) {
            return `${name}-${v}`;
        };
    },
    formatDate(date, fmt) {
        if (this.isObject(date) == false) {
            return date;
        }
        date = new Date(date);
        // console.log('date：' + date);
        if (fmt === undefined) {
            fmt = 'yyyy-MM-dd hh:mm:ss';
        }
        const o = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            S: date.getMilliseconds(), // 毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
        for (const k in o) if (new RegExp(`(${k})`).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        return fmt;
    },
};
export const ajax = Tools.ajax.bind(Tools);
export const nameSpace = Tools.namespace.bind(Tools);
export default Tools;

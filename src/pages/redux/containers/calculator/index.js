/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-eval */
/* eslint-disable prefer-template */
/* eslint-disable key-spacing */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './child/index';
import './Calculator.scss';
import { clickKey, clickEqual, clickOp } from './action';
/**
 * 创建Calculator类
 */
class Calculator extends Component {
/**
 *状态集合
 */
    constructor(props) {
        super(props);
        this.calc = this.calc.bind(this);
    }

// 计算
calc= (e) => {
    const { clickOp, clickEqual, clickKey } = this.props;
    const { total } = this.props;
    const res = e.target.innerText;
    switch (res) {
    // 清除
    case 'AC': {
        clickOp(res);
        break;
    }
    // 取反
    case '+/−': {
        clickOp(res);
        break;
    }
    // 运算
    case '=': {
        clickOp(res);
        const calc = total;
        const calcRes = eval(total);
        setTimeout(() => {
            clickEqual(calc, calcRes);
        }, 1500);
        break;
    }
    // 除号运算
    case '÷': {
        clickOp('/');
        break;
    }
    // 乘号运算
    case '×': {
        clickOp('*');
        break;
    }
    // 加号运算
    case '+': {
        clickOp(res);
        break;
    }
    // 减号运算
    case '-': {
        clickOp(res);
        break;
    }
    // 百分号
    case '%': {
        clickOp('%');
        break;
    }
    // 数字按键
    default:
        clickKey(res);
        break;
    }
};

/**
 *render函数
 */
render() {
    const lis = ['AC', '/', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const { total, isShow } = this.props;
    return (
    // {/* loading */}
        <div>
            <Loading isShow={isShow} />
            <div id="bg">
                <div id="containTop">
                    <span />
                    <span />
                    <span />
                </div>
                {/* 计算器屏幕 */}
                <div id="screen">
                    <input
                        type="text"
                        value={total}
                    />
                </div>
                {/* 键盘计算 */}
                <ul>
                    {lis.map((item, index) => {
                        if (index === 1) {
                            return (
                                <li
                                    key="1"
                                    onClick={this.calc}
                                >
                                      +/−
                                </li>
                            );
                        }
                        return (
                            <li
                                key={index}
                                onClick={this.calc}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
}

export default connect(
    state => state.Calculator,
    { clickKey, clickEqual, clickOp },
)(Calculator);

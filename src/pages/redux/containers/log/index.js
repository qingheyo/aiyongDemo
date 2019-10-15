/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from './action';
import './CalcHistory.scss';
/**
 * 创建CalcHistory类
 */
class CalcHistory extends Component {
    /**
   *组件挂载之后调用
  */
    componentDidMount() {
        const { getData } = this.props;
        getData();
    }

  getData= () => {
      fetch('http://dhb:8081/test.php', {
          method: 'GET',
          mode: 'cors',
      }).then(res => res.text()).then((res) => {
          this.setState({ data: JSON.parse(res) });
      });
  }

  /**
   *render函数
  */
  render() {
      const { data } = this.props;
      return (
          <div id="calcBg">
              <ul>
                  <li>计算表达式</li>
                  <li>计算结果</li>
              </ul>
              {data.map((item, index) => (
                  <ul key={index}>
                      <li>{item.calc_expression}</li>
                      <li>{item.res}</li>
                  </ul>
              ))}
          </div>
      );
  }
}
export default connect(
    state => state.Log,
    { getData },
)(CalcHistory);

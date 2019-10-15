/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Analyze.scss';
/**
 * 创建Demo1类
 */
export default class Analyze extends React.Component {
/**
 *状态集合
 */
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                app: 'trade',
                start: '2019-09-19',
                end: '2019-09-25',
                pageno: 1,
                pagesize: 7,
            },
            theadData: ['日期', '付费人数', '免费人数', '客单价', '总收入', '到期(人)', '新订单', '续单(单)', '升级(单)', '后台(单)', '续订', '一个月(单)', '一季度(单)', '半年(单)', '一年(单)', '来源'],
            tbodyData: [],
            currentPage: 1,
            totalPage: 0,
        };
    }

    // 获取数据
    sendData = () => {
        const { formData } = this.state;
        fetch('http://ittool.aiyongbao.com/api/getdayreport', {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            body: new URLSearchParams(formData).toString(),
        }).then(res => res.text()).then((res) => {
            this.setState({
                tbodyData: (JSON.parse(res)).content,
                totalPage: Math.ceil(JSON.parse(res).num / formData.pagesize),
            });
        });
    }

    // 组件挂载渲染页面
    componentDidMount = () => {
        this.sendData();
    }

    // 数据双向绑定
    dataChange=(attr, e) => {
        // const _this = this;
        const { formData } = this.state;
        this.setState({
            formData: {
                ...formData,
                [attr]: e.target.value,
            },
        });
    }

    // 查询数据
    getData =() => {
        this.sendData();
    }

    // 下一页
    nextPage =() => {
        const { formData, currentPage, totalPage } = this.state;
        if (formData.pageno === totalPage) {
            return;
        }
        this.setState({
            currentPage: currentPage + 1,
            formData: {
                ...formData,
                pageno: formData.pageno + 1,
            },
        }, this.sendData);
    }

    // 上一页
    lastPage = () => {
        const { formData, currentPage } = this.state;
        if (formData.pageno === 1) {
            return;
        }
        this.setState({
            currentPage: currentPage - 1,
            formData: {
                ...formData,
                pageno: formData.pageno - 1,
            },
        }, this.sendData);
    }

    /**
  *render函数
  */
    render() {
        const select1 = ['交易', 1, 2];
        const select2 = [7, 8, 9];
        const { currentPage, totalPage, tbodyData, theadData } = this.state;
        return (

            <div>
                <div className="containBody">
                    <select className="containBodySelect1">
                        {select1.map((item, index) => <option key={index}>{item}</option>)}
                    </select>
                    <select
                        className="containBodySelect2"
                        defaultValue="7"
                        id="select1"
                        onChange={e => this.dataChange('pagesize', e)}
                    >
                        {select2.map((item, index) => <option key={index}>{item}</option>)}
                    </select>
                    <span>日期选择:</span>
                    <input
                        defaultValue="2019-09-19"
                        onChange={e => this.dataChange('start', e)}
                        type="date"
                    />
                    <span>-</span>
                    <input
                        defaultValue="2019-09-25"
                        onChange={e => this.dataChange('end', e)}
                        type="date"
                    />
                    <button onClick={this.getData}>查询</button>
                    <button>同步</button>
                    <span>交易上次手动同步时间:2019-09-25&nbsp;&nbsp;10:09:36</span>
                </div>

                <div className="containFooter1">
                    <table>
                        {/* 头部列表渲染 */}
                        <thead>
                            <tr>
                                {theadData.map((item, index) => <td key={index}>{item}</td>)}
                            </tr>
                        </thead>
                        {/* 后台返回数据渲染页面 */}
                        <tbody>
                            {tbodyData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.day}</td>
                                    <td>{item.payorder}</td>
                                    <td>{item.freeorder}</td>
                                    <td>{item.singleprice}</td>
                                    <td>{item.totalprice}</td>
                                    <td>{item.vipafterdatenum}</td>
                                    <td>{item.neworder}</td>
                                    <td>{item.againorder}</td>
                                    <td>{item.updateorder}</td>
                                    <td>{item.autoagainorder}</td>
                                    <td>{item.vipagainpaynum}</td>
                                    <td>{item.monthcycle}</td>
                                    <td>{item.aquartercycle}</td>
                                    <td>{item.sixmonthscycle}</td>
                                    <td>{item.ayearcycle}</td>
                                    <td><a href="javascript:void(0)">分析</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="containFooter2">
                    <span onClick={this.lastPage}>上一页</span>
                    <span>
                        {currentPage}
                             /
                        {totalPage}
                    </span>
                    <span onClick={this.nextPage}>下一页</span>
                </div>
            </div>
        );
    }
}

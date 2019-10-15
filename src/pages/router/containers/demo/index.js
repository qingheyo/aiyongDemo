import Tools from 'utils/index';
import React from 'react';
import { Button } from 'qnui';
import './index.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';

/**
    @author Mothpro
    这是一个演示的Demo组件，用于演示redux的使用
* */
class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { actions, counter } = this.props;
        const plan = counter > 0 ? (<p>{`叫你点你还真点啊！${counter}`}</p>) : '';
        return (
            <div>
                {plan}
                <Button
                    type="primary"
                    className="redux-demo"
                    onClick={() => {
                        actions.clickDemo(() => {

                        }, () => {});
                    }}
                >
点我看看
                </Button>
            </div>
        );
    }
}
export default connect(
    state => state.Demo,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Demo);

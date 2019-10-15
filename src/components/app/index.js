import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/index';
import './index.scss';
/**
    @author Mothpro
* */
class App extends React.Component {
    render() {
        return (
            <div className="container">
                {/* 导航条 */}
                <Header />
                <div className="content">
                    {/* 页面内容区域 */}
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default App;

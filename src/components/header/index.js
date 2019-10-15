import Tools from 'utils/index';
import React from 'react';
import Link from 'react-router';
import { Navigation, Icon, Menu } from 'qnui';

const { Item, Group } = Navigation;

/**
    @author Mothpro
    导航条
* */
class Header extends React.Component {
    render() {
        const linkConfig = {
            // 本地localhost或127.0.0.1环境下的路径设置
            local: {

                reduxCalculator: '/dist/redux.html#/calculator',
                reduxLog: '/dist/redux.html#/log',
                reduxIncome: '/dist/redux.html#/income',
                routerDemo: '/dist/router.html#/demo',
                routerDemo1: '/dist/router.html#/demo1',
                routerDemo2: '/dist/router.html#/demo2',

                h5: '/dist/h5/ebsindex.html',
            },
            onLine: {// 自行根据服务端路径定义
                reduxCalculator: '/dist/redux.html#/calculator',
                reduxLog: '/dist/redux.html#/log',
                reduxIncome: '/dist/redux.html#/income',
                routerDemo: '/dist/router.html#/demo',
                routerDemo1: '/dist/router.html#/demo1',
                routerDemo2: '/dist/router.html#/demo2',

                h5: '/dist/h5/ebsindex.html',
            },
        };

        const links = Tools.isLocal() ? linkConfig.local : linkConfig.onLine;

        return (
            <Navigation
                type="filling"
                activeDirection="bottom"
            >
                <li className="navigation-logo-zone">
                    <Icon type="email" />
                    <span>爱用交易</span>
                </li>
                <Item
                    itemid="1"
                    text="Router"
                    icon="service"
                >
                    <Menu>
                        <Menu.Item key="1" link={links.routerDemo}>
                            <a href={links.routerDemo}>About</a>
                        </Menu.Item>
                        <Menu.Item key="2" link={links.routerDemo1}>
                            <a href={links.routerDemo1}>About1</a>
                        </Menu.Item>
                        <Menu.Item key="3" link={links.routerDemo2}>
                            <a href={links.routerDemo2}>About2</a>
                        </Menu.Item>
                    </Menu>
                </Item>
                <Item
                    itemid="2"
                    text="Redux"
                    icon="training"
                    >
                    <Menu>
                        <Menu.Item key="1" link={links.reduxCalculator}>
                            <a href={links.reduxCalculator}>计算器</a>
                        </Menu.Item>
                        <Menu.Item key="2" link={links.reduxLog}>
                            <a href={links.reduxLog}>计算器历史</a>
                        </Menu.Item>
                        <Menu.Item key="3" link={links.reduxIncome}>
                            <a href={links.reduxIncome}>收入分析</a>
                        </Menu.Item>
                    </Menu>
                </Item>
                <Item
                    itemid="3"
                    text="H5"
                    icon="training"
                    link={links.h5}
                />
                <li className="navigation-toolbar">
                    <ul>
                        <li>
                            <Icon type="atm" />
                            <span>帮助</span>
                        </li>
                        <li>
                            <Icon type="set" />
                            <span>设置</span>
                        </li>
                    </ul>
                </li>
            </Navigation>
        );
    }
}
export default Header;

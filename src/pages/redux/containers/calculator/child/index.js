/* eslint-disable react/prop-types */
import React from 'react';

/**
 * 创建Loading纯函数
 */
export default function Loading(props) {
    const { isShow } = props;
    return (
        <div
            id="loadingContain"
            style={{ display: isShow ? 'block' : 'none' }}
        >
            <div className="content1" />
            <div className="content2" />
            <div className="content3" />
            <div className="content4" />
            <div className="content5" />
            <div className="content6" />
            <div className="content7" />
            <div className="content8" />
        </div>
    );
}



const fs = require('fs-extra');
const globby = require('globby');
const path = require('path');

// STEP 3 将lib copy 到 build 目录
globby([
    'node_modules/babel-polyfill/dist/*',
    'node_modules/react/dist/*',
    'node_modules/react-dom/dist/*',
    'node_modules/react-redux/dist/*',
    'node_modules/react-router/umd/*',
    'node_modules/react-router-redux/dist/*',
    'node_modules/redux-thunk/dist/*',
    'node_modules/redux/dist/*',
]).then((paths) => {
    fs.mkdirsSync('build/lib/');
    paths.forEach((item) => {
        const filename = path.basename(item);
        fs.copySync(item, `build/lib/${filename}`);
    });
});

// 使用统计

console.log('copy files to build/lib done !');

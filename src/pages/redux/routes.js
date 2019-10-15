
// 从./containers/index.js导入
import App from 'components/app/index';
import { Calculator, Log, Income } from './containers/index';

const createRoutes = {
    path: '/',
    component: App,
    indexRoute: { component: Calculator },
    childRoutes: [
        { path: 'calculator', component: Calculator },
        { path: 'log', component: Log },
        { path: 'income', component: Income },
    ],
};
export default createRoutes;

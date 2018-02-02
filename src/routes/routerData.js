import Home from "view/home/Home";
import Register from "view/register/Register";
import Login from "view/login/Login";
import NotFound from "view/notFound/NotFound";

const routerData = [
    {
        path: '/',
        title: '首页',
        component: Home
    },
    {
        path: '/login',
        title: '登录',
        component: Login
    },
    {
        path: '/register',
        title: '注册',
        component: Register
    },
    {
        path: '*',
        title: '404',
        component: NotFound
    }
]

export default routerData;
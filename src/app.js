import { BrowserRouter as Router, Route} from 'react-router-dom';

axios.defaults.timeout = 6000;
axios.defaults.baseURL = 'https://musicApi.hugangqiang.com';


ReactDOM.render(
    <Router>
        <div>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/web" component={Web} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/search" component={Search} /> */}
            hello
        </div>
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
import Routes from 'routes/Routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state={routesData: []}, action={}) => {
    switch(action.type){
          case "changeTable":
                return Object.assign({}, state, action.data);
          default :
                return Object.assign({}, state);
    }
}
const store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
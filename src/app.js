import Routes from 'routes/Routes'

ReactDOM.render(
    <div>
        <Routes />
    </div>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
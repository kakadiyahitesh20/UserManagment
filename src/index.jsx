import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
    import {Router} from 'react-router'
import store, {history} from './store/configureStore';
import routes from './routes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider>,
    document.getElementById("main")
);

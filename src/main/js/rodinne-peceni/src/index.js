import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const anyWindow = window;

anyWindow.renderApp = () => {
    ReactDOM.hydrateRoot(document.getElementById('root'), <BrowserRouter><App /></BrowserRouter>)
}
anyWindow.renderAppOnServer = () => {
    return ReactDOMServer.renderToString(<StaticRouter location={anyWindow.requestUrl} ><App /></StaticRouter>)
}
anyWindow.isServer = false
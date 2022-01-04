import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';
import Routes from '../routes';

const App = () => {
    return (
        <>
            <ConnectedRouter history={history}>
                <Routes/>
            </ConnectedRouter>
        </>
    );
};

export default hot(App);

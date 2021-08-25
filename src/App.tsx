import React from 'react';
import './i18n/config';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import UseContextPage from './components/pages/UseContextPage/UseContextPage';

function App() {
    return (
        <>
            <Link to="/use-context">UseContext</Link>
            <Switch>

                <Route path="/use-context" exact component={UseContextPage} />
                <Route path="/" component={HomePage} />
            </Switch>
        </>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import App from './app';

ReactDOM.render(
    <Header />, 
    document.getElementById('nav')
);

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
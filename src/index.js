import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import ToDos from './containers/ToDos';
import MyList from './containers/MyList';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Route path="/mytodos" component={ToDos}/> 
            <Route path="/mylist" component={MyList}/> 
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
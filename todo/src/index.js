import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './reducers/reducer';

// creates the store. Don't forget to import createStore
// reducer is the reducer function. Don't forget to import reducer
const store = createStore(reducer); 

ReactDOM.render(
    // Wrap App in Provider. Don't forget to import Provider
    // give provider store props that's set equal to the store we created above
    <Provider store={store}> 
        <App />
    </Provider>, 
    document.getElementById('root'));


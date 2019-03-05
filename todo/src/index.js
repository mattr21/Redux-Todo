import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import rootReducer from './reducers';

// creates the store. Don't forget to import createStore
// rootReducer is the reducer function. Don't forget to import rootReducer
const store = createStore(rootReducer); 

ReactDOM.render(
    // Wrap App in Provider. Don't forget to import Provider
    // give provider store props that's set equal to the store we created above
    <Provider store={store}> 
        <App />
    </Provider>, 
    document.getElementById('root'));


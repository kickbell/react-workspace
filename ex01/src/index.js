import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App02 from './App02';
import App01 from './App01';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Test3,{Test4, Test5} from './aaa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /><App02 /><App01 />
  </React.StrictMode>
);
function Test1(){
  return <h3>내용</h3>;
}
function Test2(){
   return <h3>test2</h3>;
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import { CookiesProvider } from "react-cookie";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
    {/* <CookiesProvider> */}
       <App />
    {/* </CookiesProvider> */}
    </BrowserRouter>
 </React.StrictMode>
);
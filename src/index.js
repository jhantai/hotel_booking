import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <App />
    </>
);

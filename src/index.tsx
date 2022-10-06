import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from 'router';
import { UserContextProvider } from 'contexts/UserContext';
import { PostContextProvider } from 'contexts/PostContext';

import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PostContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </PostContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

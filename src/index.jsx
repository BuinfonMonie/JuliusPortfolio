import React from 'react'; 
import ReactDOM, { createRoot } from 'react-dom/client'; 
import App from './App';

const container = document.getElementById('root')
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

//THIS LINE INDICATE THAT 
// ALL THE CONTENT OF THIS FILE SHOULD BE RENDERED IN THE ROOT ID OF THE HTML FILE 
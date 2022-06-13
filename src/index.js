import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 import { StateProvider } from './StateProvider';
import * as serviceWorker from './serviceWorker'
import reducer ,{initialState} from './reducer'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Construction } from '@mui/icons-material';

//  const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
   
    // const rootElement =    document.getElementById('root');
    // construction root =    createRoot(rootElement);
    

    
        <StateProvider initialState={initialState} reducer={reducer}>
        
        <App/>
        </StateProvider>
    
    // document.getElementById('root')

);

serviceWorker.unregister();
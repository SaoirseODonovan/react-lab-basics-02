import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './AppMUI';
//import '../node_modules/bootstrap/dist/css/bootstrap.css'

const rootEleeent = createRoot( document.getElementById('root' ))
rootEleeent.render(<App /> );
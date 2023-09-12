import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'
import'~/i18n/i18ninit.js'

import './assets/css/index.css'
import './assets/css/grid.css'
import './assets/css/theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextCompo from './context/reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextCompo>
      <App />
    </ContextCompo>
  </React.StrictMode>
)

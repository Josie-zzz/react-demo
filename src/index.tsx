import React from "react";
import { createRoot } from 'react-dom/client'
import App from './pages/app'
import './index.less'

const domNode = document.getElementById('root')
const root = createRoot((domNode as HTMLElement))
root.render(<App />)

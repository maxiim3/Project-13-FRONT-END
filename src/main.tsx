import React from 'react'
import {createRoot} from 'react-dom/client'
import {ProvideRouter} from './routes/Router'
import './main.css'

const rootElement = document.getElementById('root') as HTMLDivElement
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <ProvideRouter/>
    </React.StrictMode>
)



import React from 'react'
import {createRoot} from 'react-dom/client'
import './stylesheets/main.css'
import ProvideRouter from "./routes/ProvideRouter"

const rootElement = document.getElementById('root') as HTMLDivElement
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <ProvideRouter/>
    </React.StrictMode>
)



import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
          <h3>This is Custom React App</h3>
        </div>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Click here to visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://react.dev',target: '_blank' },
    'click to visit React documentation',
)

createRoot(document.getElementById('root')).render(
  reactElement
)

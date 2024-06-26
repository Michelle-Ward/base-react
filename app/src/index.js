// new render:
// https://react.dev/reference/react-dom/client/createRoot
import React from "react"
import {createRoot} from "react-dom/client"
import App from "./components/app.jsx"


const root = createRoot(document.getElementById("root"))
root.render(<App />)
import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Library from "./main-components/features/Library/Library"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ColorModeScript />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/books" element={<Library/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import SetQuestion from './components/setquestion'
import VotePage from "./components/question";
import './index.css'
import {Main} from './components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Main/>}>
          <Route path="set-question" element={<SetQuestion/>}/>
          <Route path="vote" element={<VotePage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

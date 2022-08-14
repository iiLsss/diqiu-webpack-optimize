import React, {Suspense } from 'react'
import {BrowserRouter, useRoutes} from 'react-router-dom'
import Header from './components/Header'
import routes from './routes'

const Router = () =>{
  return (
    <div className='container'>
      {useRoutes(routes)}
    </div>
  )
}

const App  = () => {
  return (
      <BrowserRouter>
      <Header/>
      <Suspense fallback={'loading'}>
        <Router />
      </Suspense>
      </BrowserRouter>

  )
}

export default App
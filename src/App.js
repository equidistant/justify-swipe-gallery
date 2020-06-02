import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyle } from './style'
import { Gallery } from './modules'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path='/' exact={true}>
        <div>
          <a href='/people'>People</a>
          <a href='/details'>Details</a>
        </div>
      </Route>
      <Route path='/:galleryName/:activeImg?'>
        <Gallery/>
      </Route>
    </BrowserRouter>
  )
}

export default App

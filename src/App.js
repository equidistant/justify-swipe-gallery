import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import styled, { css } from 'styled-components'
import { GlobalStyle } from './style'
import { Gallery } from './modules'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path='/' exact={true}>
        <div>Home</div>
      </Route>
      <Route path='/gallery/:galleryName/:activeImg?'>
        <Gallery/>
      </Route>
    </BrowserRouter>
  )
}

export default App

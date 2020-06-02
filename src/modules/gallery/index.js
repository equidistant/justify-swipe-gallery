import React from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import JustifiedGallery from './justify'
import SwipeGallery from './swipe'

import { images } from '../../data'
import { paginate } from '../../utils'

const Gallery = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const lowResImages = paginate({ images: JSON.parse(JSON.stringify(images.low[match.params.galleryName])), nPerPage: 20 })
  const highResImages = JSON.parse(JSON.stringify(images.high[match.params.galleryName]))
  const close = () => {
    const idIndex = history.location.pathname.lastIndexOf('/')
    const newUrl = history.location.pathname.substr(0, idIndex)
    history.push(newUrl)
  }
  const open = (id) => {
    const newUrl = `${history.location.pathname}/${id}`
    history.push(newUrl)
  }
  const changeUrl = (id) => {
    const idIndex = history.location.pathname.lastIndexOf('/')
    const newUrl = `${history.location.pathname.substr(0, idIndex)}/${id}`
    history.push(newUrl)
  }
  return (
    <GalleryContainer>
      <JustifiedGallery images={lowResImages} open={open}/>
      {match.params.activeImg && <SwipeGallery images={highResImages} close={close} changeUrl={changeUrl}/>}
    </GalleryContainer>
  )
}

const GalleryContainer = styled.div`

`



export default Gallery

import React, { memo, useEffect, useRef } from 'react'
import styled from 'styled-components'

const SwipeImage = memo(({ image }) => {
  const imageRef = useRef(null)
  const { url, ...rest } = image
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0
    }
    const intersectionCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > observerOptions.threshold) {
          entry.target.src = entry.target.dataset.src
          observer.unobserve(imageRef.current)
        }
      })
    }
    const observer = new IntersectionObserver(intersectionCallback, observerOptions)
    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <Img ref={imageRef} data-src={url} {...rest} />
  )
})

//

const Img = styled.img`
  width: ${props => props.width}px;
	height: ${props => props.height}px;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
	margin-left: ${props => props.marginX}px;
	margin-right: ${props => props.marginX}px;
	margin-top: ${props => props.marginY}px;
	margin-bottom: ${props => props.marginY}px;
`

export default SwipeImage

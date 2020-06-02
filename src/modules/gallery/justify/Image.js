import React, { useEffect, useRef, memo } from 'react'
import styled, { css } from 'styled-components'

const Image = memo(({ url, height, width, handleClick }) => {
  const imageRef = useRef(null)
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
    <Img data-src={url} height={height} width={width} ref={imageRef} onClick={handleClick}/>
  )
})

const Img = styled.img`
  ${props => props.width && props.height && css`
    margin: 1px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
  `}
  opacity: 1;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20);
  transition:
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms,
    transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
    opacity: 0.85;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
  }
`

export default Image

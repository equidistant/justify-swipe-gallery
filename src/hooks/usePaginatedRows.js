import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import useRows from './useRows'

const usePaginatedRows = ({ images }) => {
  const page = useRef(0)
  const galleryRef = useRef(null)
  const [rows, appendRows] = useRows({ images: images[page.current] })
  useEffect(() => {
    if (galleryRef.current.clientHeight < window.innerHeight) {
      if (rows.length > 0) {
        page.current += 1
      }
      appendRows({ images: images[page.current]})
    }
    const scrollListener = (e) => {
      if (window.innerHeight + window.scrollY >= (0.9 * galleryRef.current.clientHeight)) {
        if (page.current < images.length - 1) {
          if (rows.length > 0) {
            page.current += 1
          }
          appendRows({ images: images[page.current]})
        }
      }
    }
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [appendRows, images, rows])
  return [rows, galleryRef]
}

export default usePaginatedRows

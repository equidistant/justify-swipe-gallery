import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

const useSwipeImages = ({ images }) => {
  const [swipeImages, setSwipeImages] = useState([])
  useEffect(() => {
    setSwipeImages(buildSwipeImages(images))
    const resizeListener = debounce(() => {
      setSwipeImages(buildSwipeImages(images))
    }, 100)
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [images])
  return [swipeImages]
}

const buildSwipeImages = images => {
  const windowHeight = window.innerHeight - 20
  const windowWidth = document.body.clientWidth
  return images.map(({ url, ratio }) => {
    if (ratio < 1) {
      let height = windowHeight - 20
      let width = height * ratio
      while (height > windowHeight || width > windowWidth) {
        height = height * 0.99
        width = height * ratio
      }
      return {
        url,
        width: height * ratio,
        height: height,
        marginX: (windowWidth - width) / 2,
        marginY: (windowHeight - height) / 2,
      }
    }
    else {
      let height = windowHeight - 20
      let width = height * ratio
      while (height > windowHeight || width > windowWidth) {
        height = height * 0.99
        width = height * ratio
      }
      return {
        url,
        width,
        height,
        marginX: (windowWidth - width) / 2,
        marginY: (windowHeight - height) / 2,
      }
    }
  })
}

export default useSwipeImages

import { useRef, useEffect } from 'react'
import useRows from './useRows'
import debounce from 'lodash.debounce'

const usePaginatedRows = ({ images }) => {
  const page = useRef(0)
  const galleryRef = useRef(null)
  const [rows, appendRows, resetRows] = useRows({ images: images[page.current] })
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
    const resizeListener = debounce(() => {
      const imagesSlice = images.slice(0, page.current + 1)
      const pageImages = [].concat.apply([], imagesSlice)
      resetRows({ images: pageImages })
    }, 100)
    window.addEventListener('resize', resizeListener)
    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
      window.removeEventListener('scroll', scrollListener)
    }
  }, [appendRows, resetRows, images, rows])
  return [rows, galleryRef]
}

export default usePaginatedRows

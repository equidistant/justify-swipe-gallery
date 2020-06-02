import { useCallback, useState, useEffect } from 'react'

const useRows = ({ images }) => {
  const [rows, setRows] = useState([])
  const appendRows = useCallback(({ images }) => {
    const newRows = getRows({ images })
    setRows([...rows, ...newRows])
  }, [rows])
  const resetRows = useCallback(({ images }) => {
    const newRows = getRows({ images })
    setRows([...newRows])
  }, [])
  useEffect(() => {
    if (rows.length === 0) {
      appendRows({ images })
    }
  }, [images, rows.length, appendRows])
  return [rows, appendRows, resetRows]
}

const getRows = ({ images }) => {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  const maxWidth = window.innerWidth - scrollbarWidth - 1
  const minRatio = maxWidth / 250
  return buildRows({ images: images, maxWidth, minRatio })
}

const buildRows = ({ images, maxWidth, minRatio }) => {
  const firstImage = images[0]
  const imagesCopy = images.slice(1)
  const rowsRatios = imagesCopy.reduce((acc, image) => {
    let currentRow = acc[acc.length - 1]
    if (currentRow.ratio < minRatio) {
      currentRow.ratio += image.ratio
      currentRow.images.push(image)
      currentRow.height = maxWidth / currentRow.ratio
    } else {
      currentRow.height = maxWidth / currentRow.ratio
      acc.push({
        ratio: image.ratio, images: [image], width: maxWidth, height: maxWidth / image.ratio
      })
    }
    return acc
  }, [{
    ratio: firstImage.ratio, images: [firstImage]
  }])
  if (rowsRatios[rowsRatios.length - 1].ratio < minRatio) {
    rowsRatios.pop()
  }
  const rowsSizes= rowsRatios.map((currentRow) => {
    currentRow.images = currentRow.images.map(curr => {
      curr.width = currentRow.height * curr.ratio - 2
      curr.height = currentRow.height
      return curr
    })
    currentRow.width = currentRow.images.reduce((acc, curr) => {
      acc = acc + curr.width
      return acc
    }, 0)
    return currentRow
  })
  if (!rowsSizes[rowsSizes.length - 1].width) {
    rowsSizes.pop()
  }
  return rowsSizes
}

export default useRows

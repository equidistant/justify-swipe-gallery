import React from 'react'
import styled from 'styled-components'
import Image from './Image'

import { usePaginatedRows } from '../../../hooks'

const JustifiedGallery = ({ images, open }) => {
  const [rows, jgRef] = usePaginatedRows({ images })
  return (
    <JustifiedGalleryContainer ref={jgRef}>
        {renderRows({ rows, open })}
    </JustifiedGalleryContainer>
  )
}

const renderRows = ({ rows, open }) => {
  return rows.map((row, index) => {
    return (
      <Row key={index}>
        {
          row.images.map(({ width, height, url, id}) => {
            return (
              <Image url={url} height={height} width={width} key={url} handleClick={() => open(id)} />
            )
          })
        }
      </Row>
    )
  })
}

const JustifiedGalleryContainer = styled.div`
`

const Row = styled.div`
  display: flex;
  height: min-content;
  width: min-content;
`



export default JustifiedGallery

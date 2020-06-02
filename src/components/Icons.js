import React, { memo } from 'react'
import styled from 'styled-components'

export const Icon = styled.svg.attrs(props =>
  ({
    viewBox: props.viewBox,
    width: props.width,
    height: props.height
  }))`
  display: block;
`

export const IconPath = styled.path.attrs(props =>
  ({
    d: props.d,
    fill: props.fill
  }))`
`

export const PreviousIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z'} fill={'#FFFFFF'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const NextIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z'} fill={'#FFFFFF'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

export const CloseIcon = memo(() => {
  return (
    <Icon viewBox={'0 0 24 24'} width={'24px'} height={'24px'}>
      <IconPath d={'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'} fill={'#FFFFFF'}/>
      <IconPath d={'M0 0h24v24H0z'} fill={'none'}/>
    </Icon>
  )
})

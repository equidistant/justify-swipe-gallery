import React, { memo } from 'react'
import styled from 'styled-components'
import { PreviousIcon, NextIcon, CloseIcon } from './Icons'

export const PreviousButton = memo(({ handleClick }) => {
  return (
    <PreviousButtonContainer onClick={handleClick}>
      <PreviousIcon />
    </PreviousButtonContainer>
  )
})

export const NextButton = memo(({ handleClick }) => {
  return (
    <NextButtonContainer onClick={handleClick}>
      <NextIcon />
    </NextButtonContainer>
  )
})

export const CloseButton = memo(({ handleClick }) => {
  return (
    <CloseButtonContainer onClick={handleClick}>
      <CloseIcon />
    </CloseButtonContainer>
  )
})

export const PreviousButtonContainer = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  left: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`

const NextButtonContainer = styled.div`
  position: absolute;
  bottom: calc(50% - 25px);
  right: 2%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 8;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: translateY(2px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`

import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components/macro'

const Wrapper = styled.main`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
`

const Scene = styled.div`
    position: absolute;
    width: ${props => props.width}vw;
    height: ${props => props.height}vh;
    perspective: ${props => props.perspective}px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1000ms ease-in-out;
`

const Carousel = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateY(${props => props.degree}deg);
		transition: all 1000ms ease-in-out;
`

const Cell = styled.div`
    position: absolute;
    width: ${props => props.width}vw;
    height: ${props => props.height}vh;
    transform: rotateY(${props => props.rotateY}deg) translateZ(${props => props.translateZ}vw);
    background-image: url(${props => props.imageURL});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e7eb;
`

export default function App() {
  const [degree, setDegree] = useState(0)
  const swipeHandler = useSwipeable({
    onSwipedLeft: ({ deltaX }) => setDegree(prevState => prevState + deltaX),
    onSwipedRight: ({ deltaX }) => setDegree(prevState => prevState - deltaX),
    delta: 10, preventDefaultTouchmoveEvent: false, trackTouch: true, trackMouse: true
  })
  const scene = {
    width: 30,
    height: 40,
    perspective: 2000
  }
  const links = [
    '/images/001.png',
    '/images/002.png',
    '/images/003.png',
    '/images/004.png',
    '/images/005.png',
    '/images/006.png',
    '/images/007.png'
  ]

  return (
    <Wrapper {...swipeHandler}>
      <Scene {...scene}>
        <Carousel degree={degree}>
          {links.map((l, i, a) => (
            <Cell
              key={l}
              width={scene.width}
              height={scene.height}
              translateZ={(scene.width / 2) / Math.tan(Math.PI / a.length)}
              rotateY={(360 / a.length) * i}
              imageURL={l}
            />
          ))}
        </Carousel>
      </Scene>
    </Wrapper>
  )
}

import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Toggle from 'react-styled-toggle'
import logo from './logo.svg'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    cursor: grabbing;
    background-color: white;
    filter: invert(${props => props.invert ? 1 : 0});
`

const Header = styled.div`
  position: fixed;
  width: 200px;
  height: 129px;
  top: 10px;
  left: 10px;
  z-index: 0;
  background-image: url(${props => props.logo});
  background-size: contain;
`

const Switch = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 10;
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
    background-size: ${props => props.size};
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e7eb;
`

export default function App() {
  const [degree, setDegree] = useState(0)
  const [invert, setInvert] = useState(false)
  const scene = { height: 30, width: 40, perspective: 5000 }
  const links = [
    'https://crudcarouselapp.s3.eu-central-1.amazonaws.com/R33D.svg',
    'https://crudcarouselapp.s3.eu-central-1.amazonaws.com/67216aed87816a4cae60df0e6c1e02d3.gif',
    'https://crudcarouselapp.s3.eu-central-1.amazonaws.com/00000004.png',
    'https://crudcarouselapp.s3.eu-central-1.amazonaws.com/00000005.png',
    'https://crudcarouselapp.s3.eu-central-1.amazonaws.com/00000003.gif',
    'https://crudcarouselapp.s3.eu-central-1.amazonaws.com/1615464000408',
  ]

  const swipeHandler = useSwipeable({
    onSwipedLeft: ({ deltaX }) => setDegree(prevState => prevState + deltaX),
    onSwipedRight: ({ deltaX }) => setDegree(prevState => prevState - deltaX),
    delta: 2, preventDefaultTouchmoveEvent: false, trackTouch: true, trackMouse: true
  })

  const invertHandler = () => setInvert(prevState => !prevState)

  return (
    <Wrapper {...swipeHandler} invert={invert}>
      <Header logo={logo} />
      <Switch>
        <Toggle defaultChecked={invert} onChange={invertHandler} />
      </Switch>
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
              size={(i === 0 || i === 1 || i === a.length - 1) ? 'contain' : 'cover'}
            />
          ))}
        </Carousel>
      </Scene>
    </Wrapper>
  )
}

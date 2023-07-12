import { pageData } from './composables/pageData'

import './App.css'
import Title from './components/title'
import { useState } from 'react'
import Image from './components/image'

function App() {
  // const [count, setCount] = useState(0)
  const [rotationPosition, setRotationPosition] = useState<number[]>(new Array(pageData.length).fill(0))
  const  [activeIndex, setActiveIndex] = useState<number>(-1)
  const handleSetRotation = (index: number) => {
    const newRotation :number  = Math.random() *20 * (Math.round(Math.random()) ? 1 : -1)
    const temporaryRotatePos = [...rotationPosition]
    temporaryRotatePos[index] = newRotation
    setRotationPosition(temporaryRotatePos)
    setActiveIndex(index)
  }
  return (
    <>
     <div className="main-container">
      <div className="title-container">
       {
        pageData.map(({title}, index) => {
          return <Title key={index} title={title} index={index} active={activeIndex === index} setRotation ={handleSetRotation} setIndex={setActiveIndex} />
        })
       }
      </div>
      <div className="image-container">
      {
        pageData.map(({url}, index :number) => {
          return <Image key={index} url={url} active={activeIndex === index} rotationPosition={rotationPosition[index]}
          />
        })
       }
      </div>
     </div>
    </>
  )
}

export default App

import React, { useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useThree } from '@react-three/fiber';

import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/sky'
import Homeinfo from '../components/Homeinfo'

const Home = () => {
  // State to manage the current stage

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);


  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition
    let rotation =  [0,0, 0]

    if (window.innerWidth < 480) { // Small devices (phones in portrait mode)
      screenScale = [0.7, 0.7, 0.7]; // Increased scale to zoom out more
      screenPosition = [-50, -130, -100];
    } else if (window.innerWidth < 768) { // Medium devices (tablets in portrait mode)
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [-60, -150, -100];
    } else { // Larger devices
      screenScale = [1, 1, 1];
      screenPosition = [-60, -160, -970];
    }

    return [screenScale, screenPosition,  rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  return (
    <section className='w-full h-screen relative'>
       <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <Homeinfo currentStage = {currentStage} />}
      </div>

      <Canvas
  className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
  camera={{ near: 10, far: 2000, position: [0, 0, 10] }} // Increased the Y position from 0 to 5
>
  <Suspense fallback={<Loader />}>
    <directionalLight position={[1, 1, 1]} intensity={2} />
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 5, 10]} intensity={2} />
    <spotLight
      position={[0, 50, 20]}
      angle={0.15}
      penumbra={2}
      intensity={2}
    />
    <hemisphereLight
      skyColor='#b1e1ff'
      groundColor='#000000'
      intensity={1}
    />
    <Island
      position={islandPosition}
      rotation={islandRotation}
      scale={islandScale}
      isRotating={isRotating}
      setIsRotating={setIsRotating}
      setCurrentStage={setCurrentStage}
    />
  </Suspense>
</Canvas>

    </section>
  )
}

export default Home

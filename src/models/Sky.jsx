import {useGLTF} from '@react-three/drei'

import React from 'react'
import Stars from '../assets/stars.glb'

const Sky = () => {
    const sky = useGLTF(Stars);
  return (
    <mesh>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
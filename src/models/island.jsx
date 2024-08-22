import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import islandScene from '../assets/san_francisco_city.glb';
import { a } from '@react-spring/three';
import * as THREE from 'three';

// import agiaDiffuse from '../assets/textures/agia_diffuse.png'
// import agiaNormal from '../assets/textures/agia_normal.png'

//import baseCallesDiffuse from '../assets/textures/Base_y_Calles_diffuse.png'
// import baseCallesEmissive from '../assets/textures/Base_y_Calles_emissive.png'
// import baseCallesNormal from '../assets/textures/Base_y_Calles_normal.png'

// import concretoDiffuse from '../assets/textures/Concreto_edifs_diffuse.png'
// import concretoEmissive from '../assets/textures/Concreto_edifs_emissive.png'
// import concretoNormal from '../assets/textures/Concreto_edifs_normal.png'


const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.98; // Slightly lower damping for slower deceleration
  const rotationFactor = 0.02 * Math.PI; // Reduced rotation speed factor

  // const textureLoader = new THREE.TextureLoader();
  // // const agia_diffuse = textureLoader.load(agiaDiffuse);
  // // const agia_normal = textureLoader.load(agiaNormal);
  // // //const agia_specularGlossiness = textureLoader.load(agiaSpecular);
  // const Base_y_Calles_diffuse = textureLoader.load(baseCallesDiffuse);
  // const Base_y_Calles_emissive = textureLoader.load(baseCallesEmissive);
  // const Base_y_Calles_normal = textureLoader.load(baseCallesNormal)

  // const Concreto_edifs = textureLoader.load(concretoDiffuse);
  // const Concreto_edifs_emissive = textureLoader.load(concretoEmissive);
  // const Concreto_edifs_normal =  textureLoader.load(concretoNormal);

  // useEffect(() => {
  //   if (nodes && materials) {
  //     if (materials.agia) {
  // //       materials.agia.map = agia_diffuse; // Apply the diffuse texture
  // //       // materials.agia.normalMap = agia_normal; // Apply the normal map
  // //       //materials.agia.specularMap = agia_specularGlossiness; // Apply the specular glossiness texture
  // //       materials.agia.needsUpdate = true; // Ensure the material updates

  //       materials.Base_y_Calles.map = Base_y_Calles_diffuse;
  //       // materials.Base_y_Calles.emissiveMap = Base_y_Calles_emissive;
  //       // materials.Base_y_Calles.normalMap = Base_y_Calles_normal;
  //       materials.Base_y_Calles.needsUpdate = true;

  // //       // materials.Concreto_edifs.map = Concreto_edifs;
  // //       // materials.Concreto_edifs.emissiveMap = Concreto_edifs_emissive;
  // //       // materials.Concreto_edifs.normalMap = Concreto_edifs_normal;
  //     }
  //   }
  // }, [nodes, materials, Base_y_Calles_diffuse
  // ]);


  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * rotationFactor;
      lastX.current = clientX;
      rotationSpeed.current = delta * rotationFactor;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI; // Reduced increment
      rotationSpeed.current = 0.015; // Reduced speed
    } else if (event.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI; // Reduced increment
      rotationSpeed.current = -0.015; // Reduced speed
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * rotationFactor;
      lastX.current = clientX;
      rotationSpeed.current = delta * rotationFactor;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  
      switch (true) {
        case normalizedRotation >= -2 && normalizedRotation <= 0.2: // Stage 1 centered
          setCurrentStage(1);
          break;
        case normalizedRotation >= 5.4 && normalizedRotation <= 5.9: // Stage 3
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.5 && normalizedRotation <= 4.7: // Stage 3
          setCurrentStage(3);
          break;
        case normalizedRotation >= 3.2 && normalizedRotation <= 3.7: // Stage 4
          setCurrentStage(4);
          break;
        case normalizedRotation >= 3.8 && normalizedRotation <= 4.3: // Stage 4
          setCurrentStage(5);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.8: // Stage 4
          setCurrentStage(6);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-2641.261, -2641.261, -111.018]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials.agia} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.tierra} />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.Base_y_Calles}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Concreto_edifs}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials.Edifs_Cristal}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.Edifs_Cristal}
          />
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials.Edifs_Cristal}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Edifs_chicos}
          />
          <mesh geometry={nodes.Object_21.geometry} material={materials.Puente} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.Puente} />
        </group>
      </group>
    </a.group>
  );
};

export default Island;

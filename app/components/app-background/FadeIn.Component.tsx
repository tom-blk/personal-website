import { useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'

const FadeIn = () => {

    const { gl } = useThree();

    let opacity = 0;
    let initialFrameSkipper = 0;

    useFrame((state, delta) => {
        if(opacity >= 1) return;
        if(initialFrameSkipper > 150){
            opacity=+2;
            gl.setClearColor(`rgba(255, 255, 255, ${opacity})`);
        }
        initialFrameSkipper++;
    });

  return (
    <></>
  )
}

export default FadeIn
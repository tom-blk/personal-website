import React, {useRef} from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh } from 'three'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const Planet = () => {

    const ref = useRef<Mesh>(null!)
    const bodyRef = useRef<RapierRigidBody>(null!)

    const url = "/3d/planets/aerial_rocks_02.gltf";

    const {scene: model} = useLoader(GLTFLoader, url);


    useFrame(() => {
        ref.current.rotation.y += 0.0008
    })

    //const texture = useLoader(GLTFLoader, "/3d/planets/aerial_rocks_02.gltf")

    return (
        <RigidBody ref={bodyRef} restitution={1}>
            <mesh ref={ref} position={[40, 0, -50]} scale={[0.5, 0.5, 0.5]} castShadow receiveShadow>
                <primitive object={model} />
            </mesh>
        </RigidBody>
    )
    }

export default Planet
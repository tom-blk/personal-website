import React, {useRef} from 'react'
import { ObjectMap, useFrame, useLoader } from '@react-three/fiber'
import { GLTF, GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Group, Mesh, Object3DEventMap } from 'three'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'

interface PlanetProps{
    model: Group<Object3DEventMap>
}

const Planet = ({model}: PlanetProps) => {

    const ref = useRef<Mesh>(null!)
    const bodyRef = useRef<RapierRigidBody>(null!)

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
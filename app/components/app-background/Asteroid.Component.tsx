import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { Group, Mesh, Object3DEventMap } from 'three'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'
import { Clone } from '@react-three/drei'

interface AsteroidProps{
    position: [number, number, number],
    scale: number,
    speed: number,
    model: Group<Object3DEventMap>
}

const Asteroid = (props: AsteroidProps) => {
    const {position, scale, speed, model} = props

    const meshRef = useRef<Mesh>(null!)
    const bodyRef = useRef<RapierRigidBody>(null!)

    useFrame(() => {
        if(meshRef.current && bodyRef.current){
            meshRef.current.rotation.y += 0.008
            //bodyRef.current.applyImpulse({x: 0, y: -speed, z: 0}, true)
        }
    })

    //const {scene} = useLoader(GLTFLoader, "/3d/planets/aerial_rocks_02.gltf")

    return (
        <RigidBody ref={bodyRef} restitution={1}>
            <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
                <Clone object={model}/>
            </mesh>
        </RigidBody>
    )
    }

export default Asteroid
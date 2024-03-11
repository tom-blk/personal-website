import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Box3, Group, Mesh, Vector3 } from 'three';
import * as THREE from "three";

const Space = () => {

    const textureUrl = "/3d/nebula/textures/emissive.jpg";

    const texture = new THREE.CubeTextureLoader().load([
        textureUrl, textureUrl, textureUrl, textureUrl, textureUrl, textureUrl
    ])

    const {scene, camera} = useThree();
    
    const model = useLoader(GLTFLoader, "/3d/space/scene.gltf");

    const groupRef = useRef<Group>(null!);
    const meshRef = useRef<Mesh>(null!);

    scene.background = texture;

    React.useEffect(() => {
        const box3 = new Box3().setFromObject(meshRef.current);
        const center = new Vector3();
        box3.getCenter(center);
        meshRef.current.position.sub(center);  // center the model
        meshRef.current.position.y = 0;  // adjust model position
      }, [scene]);

    camera.position.z = 5;
    camera.position.y = 0;

    useFrame((state) => {
        if(groupRef.current){
            //ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.0003) + 0.7;
            groupRef.current.rotation.y += 0.00008;
        }
    })

    //values [-1.5, -1.3, 7]

    return (
        <group scale={[1800, 1800, 1800]} position={[400,-500, -2500]} rotation={[1, 0, 0.2]} ref={groupRef}>
            <mesh ref={meshRef} visible={true} castShadow receiveShadow>
                <primitive object={model.scene} />
            </mesh>
        </group>
    )
}

export default Space
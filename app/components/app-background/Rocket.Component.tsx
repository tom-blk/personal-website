import React, {MutableRefObject, useEffect, useRef} from 'react';
import { RootState, useFrame, useLoader } from '@react-three/fiber';
import { Mesh,  } from 'three';
import * as THREE from 'three';
import { Trail } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { degToRad } from 'three/src/math/MathUtils.js';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRocketControlsStore } from '@/app/zustand-stores/useRocketControls.Store';

const MOVEMENT_SPEED = 0.1;
const ROTATION_SPEED = 1;

const Rocket = () => {
    //Double line breaks because the code is long and complex. 

    const { isOnAutoPilot } = useRocketControlsStore();

    const rocketModel = useLoader(GLTFLoader, "/3d/rocket/rocket.gltf")
    const rocketMeshRef = useRef<Mesh>(null!);
    const rocketBodyRef = useRef<RapierRigidBody>(null!)
    const targetRef = useRef<Mesh>(null!);


    
    const spherical = new THREE.Spherical();
    const rotationMatrix = new THREE.Matrix4();
    const targetQuaternion = new THREE.Quaternion();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


    const rocketIsUnderMaxVel = (rocket: MutableRefObject<RapierRigidBody>, max: number) => {
        if(rocketBodyRef.current)
        return rocket.current.linvel().x < max && rocket.current.linvel().y < max && rocket.current.linvel().z < max;
    }


    useEffect(() => {
    //Run the updating functions once to start a recursive loop
        generateTarget();
    }, [])


    useFrame((state, delta) => {
    // Generate impulse from the back of the rocket based on the direction it's facing 

        const rocketForwardDirection = new THREE.Vector3(0, 0, -1);
        rocketMeshRef.current.getWorldDirection(rocketForwardDirection);

        const impulseDirection = {
            x: -rocketForwardDirection.x * MOVEMENT_SPEED * delta,
            y: -rocketForwardDirection.y * MOVEMENT_SPEED * delta,
            z: -rocketForwardDirection.z * MOVEMENT_SPEED * delta
        };

        if(rocketBodyRef.current && rocketMeshRef.current){
            animate(delta, impulseDirection);
            updateRotationMatrix(state);
        }
    });


    const animate = (delta: number, impulseDirection: {x: number, y: number, z: number}) => {
    // If the rocket is not at the target rotation, rotate it towards the target
        if(!rocketMeshRef.current.quaternion.equals(targetQuaternion)) {
            const step = delta * ROTATION_SPEED
            rocketMeshRef.current.quaternion.rotateTowards(targetQuaternion, step);
            rocketBodyRef.current.setAngularDamping(MOVEMENT_SPEED * 15);
            rocketBodyRef.current.setLinearDamping(MOVEMENT_SPEED * 15);
        }

    // Stop the rocket from accelerating if it's at max velocity
        if(rocketIsUnderMaxVel(rocketBodyRef, 10))
            rocketBodyRef.current.applyImpulse(impulseDirection, true);
    
    // Brake the rocket when it is near the target 
        const rocketBodyRefVector = rocketBodyRef.current.translation();
        if(new THREE.Vector3(rocketBodyRefVector.x, rocketBodyRefVector.y, rocketBodyRefVector.z).distanceTo(targetRef.current.position) < 0.5) {
            rocketBodyRef.current.setLinearDamping(MOVEMENT_SPEED * 50);
            rocketBodyRef.current.setAngularDamping(MOVEMENT_SPEED * 50);
        }
    }


    const generateTarget = () => {
    // Generate the target
        spherical.theta = Math.random() * Math.PI * 2;
        spherical.phi = Math.acos( ( 2 * Math.random() ) - 1 );
        spherical.radius = 2;

        targetRef.current.position.setFromSpherical( spherical );

        setTimeout( generateTarget, 2000 );
    }


    const updateRotationMatrix = (state: RootState) => {
    // The mesh itself doesn't move, but the body does, so we need to create a vector from the body's position
        const rocketBodyRefVector = rocketBodyRef.current.translation();
        if(isOnAutoPilot){
            rotationMatrix.lookAt(
                new THREE.Vector3(rocketBodyRefVector.x, rocketBodyRefVector.y, rocketBodyRefVector.z),
                targetRef.current.position, 
                rocketMeshRef.current.up 
            );
        }else if(!isOnAutoPilot){
            console.log(state.pointer.x, state.pointer.y);
            rotationMatrix.lookAt(
                new THREE.Vector3(rocketBodyRefVector.x, rocketBodyRefVector.y, rocketBodyRefVector.z),
                new THREE.Vector3(state.pointer.x*5, state.pointer.y*5, 0), 
                rocketMeshRef.current.up 
            );
        }

        targetQuaternion.setFromRotationMatrix( rotationMatrix );
    }


    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }


    window.addEventListener('resize', onWindowResize);


    const RotatedRocket = (
        props: {rotate: {x: number, y: number, z: number}}
    ) => {
        //Can't apply rotatiion to the model of the rocket via a primitive directly, 
        //but it needs to be rotated for the lookAt() function to work correctly in this context
        const { rotate } = props;
        const rocket = rocketModel.scene;
        const euler = new THREE.Euler(rotate.x, rotate.y, rotate.z, 'XYZ');
        rocket.setRotationFromEuler(euler);
        return (
            <primitive object={rocket} />
        ); 
    }


    return (
        <>
        {/* Rocket */}
            <Trail 
                width={1}
                color={'#FF4F00'}
                length={1.5}
                decay={.1}
                local={false}
                stride={0}
                interval={2}
                attenuation={(width) => width}
            >
                <RigidBody ref={rocketBodyRef}>
                    <mesh scale={0.1} ref={rocketMeshRef}>
                        <RotatedRocket rotate={{x: -degToRad(90), y: 0, z: 0}} />
                    </mesh>
                </RigidBody>
            </Trail>
        {/* Rocket Target */}
            <mesh ref={targetRef}>
                <sphereGeometry args={[0.05]} />
                <meshBasicMaterial transparent opacity={0.0} color={0xff0000} />
            </mesh>
        {/* 3D Target Bounds */}
            <mesh>
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial color={0xcccccc} wireframe transparent opacity={0.0} />
            </mesh>
        </>
    );
}

export default Rocket;
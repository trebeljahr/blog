/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Rock_Snow_5_1: THREE.Mesh;
    Rock_Snow_5_2: THREE.Mesh;
  };
  materials: {
    Rock: THREE.MeshStandardMaterial;
    Snow: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/Rock_Snow_5.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.Rock_Snow_5_1.geometry}
          material={materials.Rock}
        />
        <mesh
          geometry={nodes.Rock_Snow_5_2.geometry}
          material={materials.Snow}
        />
      </group>
    </group>
  );
}

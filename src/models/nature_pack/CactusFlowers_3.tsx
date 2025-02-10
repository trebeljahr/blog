/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    CactusFlowers_3_1: THREE.Mesh;
    CactusFlowers_3_2: THREE.Mesh;
  };
  materials: {
    Green: THREE.MeshStandardMaterial;
    Pink: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/CactusFlowers_3.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.CactusFlowers_3_1.geometry}
          material={materials.Green}
        />
        <mesh
          geometry={nodes.CactusFlowers_3_2.geometry}
          material={materials.Pink}
        />
      </group>
    </group>
  );
}

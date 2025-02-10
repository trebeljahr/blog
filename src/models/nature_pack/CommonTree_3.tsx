/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    CommonTree_3_1: THREE.Mesh;
    CommonTree_3_2: THREE.Mesh;
    CommonTree_3_3: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
    Green: THREE.MeshStandardMaterial;
    DarkGreen: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/CommonTree_3.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.CommonTree_3_1.geometry}
          material={materials.Wood}
        />
        <mesh
          geometry={nodes.CommonTree_3_2.geometry}
          material={materials.Green}
        />
        <mesh
          geometry={nodes.CommonTree_3_3.geometry}
          material={materials.DarkGreen}
        />
      </group>
    </group>
  );
}

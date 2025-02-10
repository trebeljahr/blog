/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    BirchTree_Dead_Snow_2_1: THREE.Mesh;
    BirchTree_Dead_Snow_2_2: THREE.Mesh;
    BirchTree_Dead_Snow_2_3: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    Snow: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/BirchTree_Dead_Snow_2.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.BirchTree_Dead_Snow_2_1.geometry}
          material={materials.White}
        />
        <mesh
          geometry={nodes.BirchTree_Dead_Snow_2_2.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.BirchTree_Dead_Snow_2_3.geometry}
          material={materials.Snow}
        />
      </group>
    </group>
  );
}

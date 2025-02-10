/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    PineTree_Snow_2_1: THREE.Mesh;
    PineTree_Snow_2_2: THREE.Mesh;
    PineTree_Snow_2_3: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
    Green: THREE.MeshStandardMaterial;
    Snow: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/PineTree_Snow_2.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.PineTree_Snow_2_1.geometry}
          material={materials.Wood}
        />
        <mesh
          geometry={nodes.PineTree_Snow_2_2.geometry}
          material={materials.Green}
        />
        <mesh
          geometry={nodes.PineTree_Snow_2_3.geometry}
          material={materials.Snow}
        />
      </group>
    </group>
  );
}

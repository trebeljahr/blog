/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    CactusFlowers_4_1: Mesh;
    CactusFlowers_4_2: Mesh;
  };
  materials: {
    Green: MeshStandardMaterial;
    Pink: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/CactusFlowers_4.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.CactusFlowers_4_1.geometry}
          material={materials.Green}
        />
        <mesh
          geometry={nodes.CactusFlowers_4_2.geometry}
          material={materials.Pink}
        />
      </group>
    </group>
  );
}

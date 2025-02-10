/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    PineTree_1_1: Mesh;
    PineTree_1_2: Mesh;
  };
  materials: {
    Wood: MeshStandardMaterial;
    Green: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/PineTree_1.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.PineTree_1_1.geometry}
          material={materials.Wood}
        />
        <mesh
          geometry={nodes.PineTree_1_2.geometry}
          material={materials.Green}
        />
      </group>
    </group>
  );
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Willow_3_1: Mesh;
    Willow_3_2: Mesh;
  };
  materials: {
    Wood: MeshStandardMaterial;
    DarkGreen: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/Willow_3.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.04, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      >
        <mesh geometry={nodes.Willow_3_1.geometry} material={materials.Wood} />
        <mesh
          geometry={nodes.Willow_3_2.geometry}
          material={materials.DarkGreen}
        />
      </group>
    </group>
  );
}

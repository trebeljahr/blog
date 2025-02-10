/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Willow_Dead_Snow_5_1: Mesh;
    Willow_Dead_Snow_5_2: Mesh;
  };
  materials: {
    Wood: MeshStandardMaterial;
    Snow: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/Willow_Dead_Snow_5.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.Willow_Dead_Snow_5_1.geometry}
          material={materials.Wood}
        />
        <mesh
          geometry={nodes.Willow_Dead_Snow_5_2.geometry}
          material={materials.Snow}
        />
      </group>
    </group>
  );
}

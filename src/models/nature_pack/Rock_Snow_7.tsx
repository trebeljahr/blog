/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Rock_Snow_7_1: Mesh;
    Rock_Snow_7_2: Mesh;
  };
  materials: {
    Snow: MeshStandardMaterial;
    Rock: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/Rock_Snow_7.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.Rock_Snow_7_1.geometry}
          material={materials.Snow}
        />
        <mesh
          geometry={nodes.Rock_Snow_7_2.geometry}
          material={materials.Rock}
        />
      </group>
    </group>
  );
}

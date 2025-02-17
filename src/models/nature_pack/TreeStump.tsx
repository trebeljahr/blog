/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    TreeStump_1: Mesh;
    TreeStump_2: Mesh;
    TreeStump_3: Mesh;
  };
  materials: {
    Wood: MeshStandardMaterial;
    LightWood: MeshStandardMaterial;
    Green: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/TreeStump.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.TreeStump_1.geometry} material={materials.Wood} />
        <mesh
          geometry={nodes.TreeStump_2.geometry}
          material={materials.LightWood}
        />
        <mesh
          geometry={nodes.TreeStump_3.geometry}
          material={materials.Green}
        />
      </group>
    </group>
  );
}

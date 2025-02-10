/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    PineTree_Autumn_5_1: Mesh;
    PineTree_Autumn_5_2: Mesh;
    PineTree_Autumn_5_3: Mesh;
  };
  materials: {
    Wood: MeshStandardMaterial;
    LightOrange: MeshStandardMaterial;
    Orange: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/PineTree_Autumn_5.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.PineTree_Autumn_5_1.geometry}
          material={materials.Wood}
        />
        <mesh
          geometry={nodes.PineTree_Autumn_5_2.geometry}
          material={materials.LightOrange}
        />
        <mesh
          geometry={nodes.PineTree_Autumn_5_3.geometry}
          material={materials.Orange}
        />
      </group>
    </group>
  );
}

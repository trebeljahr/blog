/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Rock3: Mesh;
  };
  materials: {
    Rock: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/simple_nature_pack/Rock3.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Rock3.geometry}
        material={materials.Rock}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/3d-assets/glb/simple_nature_pack/Rock3.glb");

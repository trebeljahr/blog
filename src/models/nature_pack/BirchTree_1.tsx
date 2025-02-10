/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    BirchTree_1_1: Mesh;
    BirchTree_1_2: Mesh;
    BirchTree_1_3: Mesh;
    BirchTree_1_4: Mesh;
  };
  materials: {
    White: MeshStandardMaterial;
    Black: MeshStandardMaterial;
    DarkGreen: MeshStandardMaterial;
    Green: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/BirchTree_1.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.BirchTree_1_1.geometry}
          material={materials.White}
        />
        <mesh
          geometry={nodes.BirchTree_1_2.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.BirchTree_1_3.geometry}
          material={materials.DarkGreen}
        />
        <mesh
          geometry={nodes.BirchTree_1_4.geometry}
          material={materials.Green}
        />
      </group>
    </group>
  );
}

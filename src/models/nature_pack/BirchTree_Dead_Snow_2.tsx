/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    BirchTree_Dead_Snow_2_1: Mesh;
    BirchTree_Dead_Snow_2_2: Mesh;
    BirchTree_Dead_Snow_2_3: Mesh;
  };
  materials: {
    White: MeshStandardMaterial;
    Black: MeshStandardMaterial;
    Snow: MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/3d-assets/glb/nature_pack/BirchTree_Dead_Snow_2.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          geometry={nodes.BirchTree_Dead_Snow_2_1.geometry}
          material={materials.White}
        />
        <mesh
          geometry={nodes.BirchTree_Dead_Snow_2_2.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.BirchTree_Dead_Snow_2_3.geometry}
          material={materials.Snow}
        />
      </group>
    </group>
  );
}

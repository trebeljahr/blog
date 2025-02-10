/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    sphere_gltf: THREE.Mesh;
  };
  materials: {
    aerial_beach_01: THREE.MeshStandardMaterial;
  };
};

export function useBeachMaterial() {
  return useGLTF(
    "/3d-assets/glb/aerial_beach_01_1k.glb"
  ) as unknown as GLTFResult;
}

useGLTF.preload("/3d-assets/glb/aerial_beach_01_1k.glb");

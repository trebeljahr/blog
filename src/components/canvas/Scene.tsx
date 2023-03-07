import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Preload } from "@react-three/drei";

type Props = {
  children: React.ReactNode;
  [x: string]: any;
};

export default function Scene({ children, ...props }: Props) {
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
        { name: "descend", keys: ["c", "C", "Shift"] },
        { name: "attack", keys: ["F", "f"] },
      ]}
    >
      <Canvas {...props}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {children}
        <Preload all />
      </Canvas>
    </KeyboardControls>
  );
}

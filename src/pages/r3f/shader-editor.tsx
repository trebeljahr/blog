import {
  CodeEditor,
  SideBySideShaderEditor,
} from "@components/canvas/shaderTutorials/ShaderEditor";
import { ThreeFiberLayout } from "@components/dom/Layout";
const shaderCode = `
void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;

export default function ShaderEditorPage() {
  return (
    <ThreeFiberLayout>
      {/* <CodeEditor code={shaderCode} /> */}
      <SideBySideShaderEditor initialCode={shaderCode} />
    </ThreeFiberLayout>
  );
}

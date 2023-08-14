import { useThree } from "@react-three/fiber";
import { ReactNode } from "react";
import { PerspectiveCamera } from "three";

type FullscreenProps = {
  children(size: { width: number; height: number }): ReactNode;
};

export function Fullscreen({ children }: FullscreenProps) {
  const size = useThree((s) => s.size);
  const camera = useThree((s) => s.camera);

  const fovAngle = (camera as PerspectiveCamera).fov;
  const fovRad = (fovAngle * Math.PI) / 180;
  const distance = 0.5 / Math.tan(fovRad / 2);

  return (
    <group position-z={-distance}>
      {children({ width: size.width, height: size.height })}
    </group>
  );
}

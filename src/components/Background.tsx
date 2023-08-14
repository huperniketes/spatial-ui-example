import { SessionModeGuard } from "@coconut-xr/natuerlich/react";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";

export function Background() {
  return (
    <SessionModeGuard deny="immersive-ar">
      <Suspense>
        <Environment blur={0.05} files="skybox/apartment_4k.hdr" background />
      </Suspense>
    </SessionModeGuard>
  );
}

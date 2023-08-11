import { XRCanvas } from "@coconut-xr/natuerlich/defaults";
import {
  NonImmersiveCamera,
  SessionModeGuard,
  useHeighestAvailableFrameRate,
  useNativeFramebufferScaling,
} from "@coconut-xr/natuerlich/react";
import { Environment } from "@react-three/drei";
import { Suspense, useState } from "react";
import ImmersiveSession from "./components/ImmersiveSession";
import { EnterDialog } from "./components/html/enter";
import { SessionInfo } from "./components/html/info";
import MusicPlayer from "./components/music-player/MusicPlayer";

function App() {
  const [state, setState] = useState<"hide" | "enter-dialog" | "VR" | "AR">(
    "enter-dialog",
  );

  const frameBufferScaling = useNativeFramebufferScaling();
  const heighestAvailableFramerate = useHeighestAvailableFrameRate();

  return (
    <>
      {state === "enter-dialog" && <EnterDialog setState={setState} />}
      {(state === "VR" || state === "AR") && (
        <SessionInfo type={state} setState={setState} />
      )}
      <XRCanvas
        dpr={window.devicePixelRatio}
        gl={{ localClippingEnabled: true }}
        frameBufferScaling={frameBufferScaling}
        frameRate={heighestAvailableFramerate}
      >
        <directionalLight position={[-2, 2, 2]} intensity={1.6} />
        <MusicPlayer />
        <SessionModeGuard deny="immersive-ar">
          <Suspense>
            <Environment
              blur={0.05}
              files="skybox/apartment_4k.hdr"
              background
            />
          </Suspense>
        </SessionModeGuard>
        <ImmersiveSession />
        <NonImmersiveCamera position={[0, 1.5, 0.5]} />
      </XRCanvas>
    </>
  );
}

export default App;

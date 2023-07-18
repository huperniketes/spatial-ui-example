import { XRCanvas } from "@coconut-xr/natuerlich/defaults";
import {
  IncludeWhenInSessionMode,
  NonImmersiveCamera,
  useEnterXR,
  useHeighestAvailableFrameRate,
  useNativeFramebufferScaling,
} from "@coconut-xr/natuerlich/react";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import ImmersiveSession from "./components/ImmersiveSession";
import MusicPlayer from "./components/music-player/MusicPlayer";

function App() {
  const settings = { requiredFeatures: ["local-floor", "hand-tracking"] };
  const enterAR = useEnterXR("immersive-ar", settings);
  const enterVR = useEnterXR("immersive-vr", settings);

  const frameBufferScaling = useNativeFramebufferScaling();
  const heighestAvailableFramerate = useHeighestAvailableFrameRate();

  return (
    <>
      <div className="xr-buttons">
        <button className="xr-button" onClick={enterAR}>
          AR
        </button>
        <button className="xr-button" onClick={enterVR}>
          VR
        </button>
      </div>
      <XRCanvas
        dpr={window.devicePixelRatio}
        gl={{ localClippingEnabled: true }}
        frameBufferScaling={frameBufferScaling}
        frameRate={heighestAvailableFramerate}
      >
        <directionalLight position={[-2, 2, 2]} intensity={0.8} />
        <MusicPlayer />
        <IncludeWhenInSessionMode deny="immersive-ar">
          <Suspense>
            <Environment files="/skybox/apartment_4k.hdr" background />
          </Suspense>
        </IncludeWhenInSessionMode>
        <ImmersiveSession />
        <NonImmersiveCamera position={[0, 1.5, 0.5]} />
      </XRCanvas>
    </>
  );
}

export default App;

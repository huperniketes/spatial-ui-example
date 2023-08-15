import ImmersiveSession from "@/components/ImmersiveSession";
import { EnterDialog, SessionInfo } from "@/features/landing";
import { XRCanvas } from "@coconut-xr/natuerlich/defaults";
import {
  useHeighestAvailableFrameRate,
  useNativeFramebufferScaling,
} from "@coconut-xr/natuerlich/react";
import { Suspense, useState } from "react";
import { Background } from "./components/Background";
import { NonImmersiveSession } from "./components/NonImmersiveSession";
import { AppProviders } from "./providers";

function App() {
  const [state, setState] = useState<"hide" | "enter-dialog" | "VR" | "AR">(
    "enter-dialog",
  );

  const frameBufferScaling = useNativeFramebufferScaling();
  const heighestAvailableFramerate = useHeighestAvailableFrameRate();

  return (
    <AppProviders>
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
        <Background />
        <Suspense>
          <ImmersiveSession />
          <NonImmersiveSession />
        </Suspense>
      </XRCanvas>
    </AppProviders>
  );
}

export default App;

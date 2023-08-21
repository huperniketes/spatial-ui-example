import {} from "@coconut-xr/natuerlich/defaults";
import { useEnterXR, useSessionSupported } from "@coconut-xr/natuerlich/react";

const settings: XRSessionInit = {
  requiredFeatures: ["local-floor"],
  optionalFeatures: ["hand-tracking"],
};

export function EnterDialog({
  setState,
}: {
  setState: (val: "hide" | "AR" | "VR") => void;
}) {
  const enterAR = useEnterXR("immersive-ar", settings);
  const enterVR = useEnterXR("immersive-vr", settings);
  const arSupported = useSessionSupported("immersive-ar");
  const vrSupported = useSessionSupported("immersive-vr");
  return (
    <div
      style={{
        zIndex: 2,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: "blur(5px)",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        padding: "2rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "min(30rem, 80vw)",
          display: "flex",
          rowGap: "2rem",
          flexDirection: "column",
        }}
      >
        <h3 style={{ margin: 0 }}>
          With koestlich and natuerlich we enable developers and designers to
          deliver interactive, cross-platform spatial computing experiences that
          simply work everywhere.
          <br />
          <br />
          <h2 style={{ margin: 0 }}>Try it out for yourself!</h2>
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <button
            className="xr-button"
            onClick={() => {
              if (arSupported) {
                enterAR();
              } else {
                setState("AR");
              }
            }}
          >
            AR
          </button>
          <button
            className="xr-button"
            onClick={() => {
              if (vrSupported) {
                enterVR();
              } else {
                setState("VR");
              }
            }}
          >
            VR
          </button>
          <button className="xr-button" onClick={() => setState("hide")}>
            2D
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "1rem",
          }}
        >
          <a target="_blank" href="https://discord.gg/RbyaXJJaJM">
            Lean more on our Discord
          </a>
          <a
            target="_blank"
            href="https://github.com/coconut-xr/spatial-ui-example"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

import { FontFamilyProvider, RootContainer } from "@coconut-xr/koestlich";
import { Suspense } from "react";
import Albums from "./Albums";
import Controls from "./Controls";
import Sidebar from "./Sidebar";
import Tabs from "./Tabs";

function MusicPlayer() {
  return (
    <group position={[0, 1.5, -0.4]} scale={1 / 1200}>
      <FontFamilyProvider
        fontFamilies={{
          medium: ["/fonts/", "Inter-Medium.json"],
          bold: ["/fonts/", "Inter-Bold.json"],
        }}
        defaultFontFamily="medium"
      >
        <Suspense>
          <RootContainer
            anchorX="center"
            anchorY="center"
            sizeX={1200}
            sizeY={700}
            pixelSize={1}
            positionType="relative"
            display="flex"
            flexDirection="row"
            alignItems="stretch"
          >
            <Sidebar />
            <Albums />
            <Tabs />
            <Controls />
          </RootContainer>
        </Suspense>
      </FontFamilyProvider>
    </group>
  );
}

export default MusicPlayer;

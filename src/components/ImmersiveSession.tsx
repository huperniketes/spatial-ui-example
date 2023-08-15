import { Layout } from "@/features/layout";
import { RootContainer } from "@coconut-xr/koestlich";
import { Controllers, Hands } from "@coconut-xr/natuerlich/defaults";
import { ImmersiveSessionOrigin } from "@coconut-xr/natuerlich/react";

function ImmersiveSession() {
  return (
    <ImmersiveSessionOrigin>
      <Hands type="touch" />
      <Controllers type="pointer" />
      <group position={[0, 1.2, -0.8]}>
        <RootContainer
          anchorX="center"
          anchorY="center"
          pixelSize={1 / 1000}
          sizeX={1.3}
          sizeY={0.8}
          dragThreshold={32}
        >
          <Layout />
        </RootContainer>
      </group>
    </ImmersiveSessionOrigin>
  );
}

export default ImmersiveSession;

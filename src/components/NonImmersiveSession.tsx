import { Fullscreen, Layout } from "@/features/layout";
import { RootContainer } from "@coconut-xr/koestlich";
import { NonImmersiveCamera } from "@coconut-xr/natuerlich/react";

export function NonImmersiveSession() {
  return (
    <NonImmersiveCamera>
      <Fullscreen>
        {({ width, height }) => (
          <RootContainer
            overflow="scroll"
            precision={0.1}
            pixelSize={1 / height}
            sizeX={width / height}
            sizeY={height / height}
          >
            <Layout />
          </RootContainer>
        )}
      </Fullscreen>
    </NonImmersiveCamera>
  );
}

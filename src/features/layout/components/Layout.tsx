import { Controls } from "@/features/controls";
import { AppRoutes } from "@/routes";
import { Glass } from "@coconut-xr/apfel-kruemel";
import { Container, RootContainer } from "@coconut-xr/koestlich";
import { Suspense } from "react";
import { Fullscreen } from "./Fullscreen";
import { Sidebar } from "./Sidebar";
import { Tabs } from "./Tabs";

export function Layout() {
  return (
    <Suspense>
      <Fullscreen>
        {({ width, height }) => (
          <RootContainer
            precision={0.1}
            pixelSize={1 / height}
            sizeX={width / height}
            sizeY={height / height}
            paddingLeft={128}
            paddingBottom={128}
            paddingRight={32}
            paddingTop={32}
          >
            <Container
              flexDirection="row"
              positionType="relative"
              height="100%"
              width="100%"
            >
              <Glass
                color="#666"
                borderRadiusLeft={32}
                borderRight={0}
                flexBasis={400}
                paddingY={16}
                paddingX={24}
              >
                <Sidebar />
              </Glass>
              <Glass
                borderRadiusRight={32}
                borderLeft={0}
                flexGrow={1}
                flexShrink={1}
                paddingY={16}
                paddingX={24}
              >
                <AppRoutes />
              </Glass>
              <Container
                flexDirection="column"
                justifyContent="center"
                positionType="absolute"
                positionTop={0}
                positionBottom={0}
                positionLeft={-96}
                translateY={102}
                translateZ={4}
              >
                <Tabs />
              </Container>
              <Container
                positionType="absolute"
                flexDirection="row"
                justifyContent="center"
                positionBottom={-96}
                positionLeft={0}
                positionRight={0}
                translateZ={4}
              >
                <Controls />
              </Container>
            </Container>
          </RootContainer>
        )}
      </Fullscreen>
    </Suspense>
  );
}

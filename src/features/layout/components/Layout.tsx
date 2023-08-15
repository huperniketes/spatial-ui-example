import { Controls } from "@/features/controls";
import { AppRoutes } from "@/routes";
import { Glass } from "@coconut-xr/apfel-kruemel";
import { Container } from "@coconut-xr/koestlich";
import { Suspense } from "react";
import { Sidebar } from "./Sidebar";
import { Tabs } from "./Tabs";

export function Layout() {
  return (
    <Suspense>
      <Container
        height="100%"
        width="100%"
        paddingLeft={128}
        paddingBottom={128}
        paddingRight={32}
        paddingTop={32}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Container
          flexDirection="row"
          positionType="relative"
          flexGrow={1}
          flexShrink={1}
          maxWidth={1500}
          maxHeight={900}
          height="100%"
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
      </Container>
    </Suspense>
  );
}

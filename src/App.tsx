import { PerspectiveCamera } from "three";
import MusicPlayer from "./components/music-player/MusicPlayer";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Container, FontFamilyProvider, Image, PlatformConstants, RootContainer, Text } from "@coconut-xr/koestlich";
import { Slider } from "@coconut-xr/apfel-kruemel";
import { TextureLoader } from "expo-three"
const image = "images/1.jpg";

// PlatformConstants.TextureLoader = TextureLoader;

function App() {

  return (
    <>
      <Canvas gl={{ localClippingEnabled: true }}>
        <pointLight intensity={0.5} position={[0, 0, -1]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 2, 2]} intensity={1.6} />
        <PointCamera />
        <XPlayer />
        
      </Canvas>
    </>
  );
}

function
PointCamera()
{
  const ratio = useThree((s) => s.size.width / s.size.height);
  const camera = useThree((s) => s.camera as PerspectiveCamera);
  camera.position.set(0, 1.5, 0);
  camera.fov = 90;
  camera.updateProjectionMatrix();

  return  (
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
        <Image width="100%" url={image} />
        <Container backgroundColor="#0f0" padding={0.05} flexDirection="column">
          <Text fontSize={0.065}>Koestlich</Text>
          <Text fontSize={0.04}>running on React Native using Expo.</Text>
        </Container>
    </RootContainer>
  </Suspense>
);
}

function XPlayer() {
  const aspectRatio = useThree(({ size }) => size.width / size.height);

  return (
    <group position={[0, 1.5, -0.4]} scale={Math.min(1, aspectRatio * 0.7) / 1200}>
      <FontFamilyProvider
        fontFamilies={{
          medium: ["https://coconut-xr.github.io/msdf-fonts/", "inter.json"],
          bold: ["https://coconut-xr.github.io/msdf-fonts/", "inter-bold.json"],
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
        <Container backgroundColor="#0f0" padding={0.05} flexDirection="column">
          <Text fontSize={16}>Koestlich</Text>
          <Text fontSize={14}>running on React Native using Expo.</Text>
        </Container>
          </RootContainer>
        </Suspense>
      </FontFamilyProvider>
    </group>
  );
}

function UI() {
  const ratio = useThree((s) => s.size.width / s.size.height);
  const camera = useThree((s) => s.camera as PerspectiveCamera);
  camera.position.set(ratio / 2, -0.5, 0.5);
  camera.fov = 90;
  camera.updateProjectionMatrix();
  const [value, setValue] = useState(0.5);
  return (
    <Suspense>
      <RootContainer
        width={ratio}
        height={1}
        gapColumn={0.05}
        gapRow={0.05}
        padding={0.05}
        backgroundColor="black"
        overflow="scroll"
      >
        <Image width="100%" url={image} />
        <Container backgroundColor="#0f0" padding={0.05} flexDirection="column">
          <Text fontSize={0.065}>Koestlich</Text>
          <Text fontSize={0.04}>running on React Native using Expo.</Text>
        </Container>
        <Container
          backgroundColor="blue"
          gapColumn={0.05}
          padding={0.1 * value}
          flexDirection="column"
        >
          {/* <SVG color="white" url={svg} />  /**/}
          <Text fontSize={0.03}>Slider</Text>
          <Slider
            scaleX={0.7}
            scaleY={0.7}
            scaleZ={0.7}
            onChange={setValue}
            value={value}
            range={1}
          />
        </Container>
        {/* <Text
          horizontalAlign="block"
          padding={0.05}
          fontSize={0.03}
          backgroundColor="green"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Text> /* */}
      </RootContainer>
    </Suspense>
  );
}

export default App;

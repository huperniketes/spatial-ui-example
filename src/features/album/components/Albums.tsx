import { Header } from "@/components/Header";
import { Container } from "@coconut-xr/koestlich";
import { albums } from "../constants/albums";
import { AlbumGrid } from "./AlbumGrid";

export function Albums() {
  return (
    <Container flexShrink={1}>
      <Header title="Albums" subtitle={`${albums.length} Albums`} />
      <Container
        marginX={-8}
        marginBottom={-16}
        overflow="scroll"
        paddingBottom={16}
        flexShrink={1}
      >
        <AlbumGrid albums={albums} showArtist />
      </Container>
    </Container>
  );
}

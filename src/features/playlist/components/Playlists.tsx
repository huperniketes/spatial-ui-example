import { Header } from "@/components/Header";
import { AlbumGrid, albums } from "@/features/album";
import { Container } from "@coconut-xr/koestlich";

export function Playlists() {
  return (
    <Container flexShrink={1}>
      <Header title="Playlists" subtitle="9 Playlists" />
      <Container
        marginX={-8}
        marginBottom={-16}
        overflow="scroll"
        paddingBottom={16}
        flexShrink={1}
      >
        <AlbumGrid albums={albums.slice(0, 9)} />
      </Container>
    </Container>
  );
}

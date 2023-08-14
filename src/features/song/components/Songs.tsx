import { Header } from "@/components/Header";
import { Container } from "@coconut-xr/koestlich";
import { SongList, songs } from "..";

export function Songs() {
  return (
    <Container flexShrink={1}>
      <Header title="Songs" subtitle={`${songs.length} Songs`} />
      <Container
        flexShrink={1}
        paddingBottom={16}
        marginBottom={-16}
        overflow="scroll"
      >
        <SongList songs={songs} showArtist showAlbum />
      </Container>
    </Container>
  );
}

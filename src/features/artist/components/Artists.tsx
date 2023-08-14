import { Header } from "@/components/Header";
import { Container } from "@coconut-xr/koestlich";
import { artists } from "..";
import { ArtistCard } from "./ArtistCard";

export function Artists() {
  return (
    <Container flexShrink={1}>
      <Header title="Artists" subtitle={`${artists.length} Artists`} />

      <Container
        gapRow={8}
        gapColumn={8}
        flexDirection="row"
        flexWrap="wrap"
        flexShrink={1}
        marginBottom={-16}
        paddingBottom={16}
        overflow="scroll"
      >
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            artist={artist}
            flexBasis={180}
            flexGrow={1}
          />
        ))}
      </Container>
    </Container>
  );
}

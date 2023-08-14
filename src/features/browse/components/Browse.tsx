import { Header } from "@/components/Header";
import { albums } from "@/features/album";
import { AlbumCard } from "@/features/album/components/AlbumCard";
import { Container, Text } from "@coconut-xr/koestlich";

export function Browse() {
  return (
    <Container flexShrink={1}>
      <Header title="Browse" subtitle="Discover New Music" />
      <Container
        marginX={-24}
        marginBottom={-16}
        paddingBottom={16}
        overflow="scroll"
        flexShrink={1}
      >
        <Text marginBottom={8} fontSize={20} fontFamily="bold" paddingX={24}>
          Trending Now
        </Text>
        <Container
          flexDirection="row"
          overflow="scroll"
          gapColumn={8}
          paddingX={16}
          marginBottom={24}
        >
          {albums.slice(0, 6).map((album) => (
            <AlbumCard album={album} flexBasis={240} showArtist />
          ))}
        </Container>
        <Text marginBottom={8} fontSize={20} fontFamily="bold" paddingX={24}>
          Latest Releases
        </Text>
        <Container
          flexDirection="row"
          overflow="scroll"
          gapColumn={8}
          paddingX={16}
        >
          {albums.slice(6, 12).map((album) => (
            <AlbumCard album={album} flexBasis={240} showArtist />
          ))}
        </Container>
      </Container>
    </Container>
  );
}

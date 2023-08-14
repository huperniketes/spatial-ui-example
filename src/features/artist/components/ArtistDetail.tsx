import { BackButton } from "@/components/BackButton";
import { AlbumGrid, albums } from "@/features/album";
import { SongList, songs } from "@/features/song";
import { Container, Image, Text } from "@coconut-xr/koestlich";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { artists } from "..";

export function ArtistDetail() {
  const { id } = useParams();

  const artist = useMemo(
    () => artists.find((artist) => artist.id === id),
    [id],
  );

  if (!artist) return;

  return (
    <Container flexGrow={1} flexShrink={1}>
      <BackButton />
      <Container
        marginBottom={-16}
        paddingBottom={16}
        marginX={-16}
        paddingX={16}
        overflow="scroll"
        flexShrink={1}
      >
        <Container alignItems="center" gapRow={16}>
          <Image
            width={240}
            aspectRatio={1}
            url={artist.imageUrl}
            borderRadius={120}
            id={`artist-image-${artist.id}`}
          />
          <Text fontSize={24} fontFamily="bold" id={`artist-name-${artist.id}`}>
            {artist.name}
          </Text>
        </Container>
        <Text fontSize={20} fontFamily="bold" marginY={16}>
          Top Songs
        </Text>
        <SongList songs={songs.slice(0, 6)} showAlbum />
        <Text fontSize={20} fontFamily="bold" marginY={16}>
          Albums
        </Text>
        <Container marginX={-8}>
          <AlbumGrid albums={albums.slice(0, 4)} size={200} />
        </Container>
      </Container>
    </Container>
  );
}

import { BackButton } from "@/components/BackButton";
import { SongList, songs } from "@/features/song";
import { Button } from "@coconut-xr/apfel-kruemel";
import { Container, Text } from "@coconut-xr/koestlich";
import { Play, Shuffle } from "@coconut-xr/lucide-koestlich";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { albums } from "../constants/albums";
import { AlbumCover } from "./AlbumCover";

export function AlbumDetail() {
  const { id } = useParams();

  const album = useMemo(() => albums.find((album) => album.id === id), [id]);

  if (!album) return null;

  return (
    <Container flexDirection="column" flexShrink={1}>
      <BackButton />
      <Container
        overflow="scroll"
        flexShrink={1}
        marginBottom={-16}
        paddingBottom={16}
        gapRow={32}
      >
        <Container flexDirection="row" gapColumn={24}>
          <AlbumCover album={album} flexBasis={300} />
          <Container flexGrow={1}>
            <Text fontSize={24} fontFamily="bold" id={`album-${album.title}`}>
              {album.title}
            </Text>
            <Text
              fontSize={18}
              opacity={0.6}
              id={`artist-${album.artist.name}`}
            >
              {album.artist.name}
            </Text>
            <Container flexDirection="row" marginTop="auto" gapColumn={8}>
              <Button
                style="rect"
                platter
                flexDirection="row"
                alignItems="center"
                gapColumn={8}
              >
                <Play width={12} height={12} />
                <Text>Play</Text>
              </Button>
              <Button
                style="rect"
                platter
                flexDirection="row"
                alignItems="center"
                gapColumn={8}
              >
                <Shuffle width={14} height={14} />
                <Text>Shuffle</Text>
              </Button>
            </Container>
          </Container>
        </Container>
        <SongList songs={songs.slice(0, 12)} />
      </Container>
    </Container>
  );
}

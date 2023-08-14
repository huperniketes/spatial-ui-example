import { useHover } from "@/hooks/useHover";
import { Container, Text } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";
import { Album } from "../types/Album";
import { AlbumCover } from "./AlbumCover";

type AlbumCardProps = ComponentPropsWithoutRef<typeof Container> & {
  album: Album;
  showArtist?: boolean;
};

export function AlbumCard({ album, showArtist, ...props }: AlbumCardProps) {
  const [hovered, hoverProps] = useHover();

  const navigate = useNavigate();

  return (
    <Container
      {...props}
      {...hoverProps}
      backgroundColor="#888"
      backgroundOpacity={hovered ? 0.4 : 0}
      borderRadius={16}
      padding={8}
      paddingBottom={16}
      onClick={() => navigate(`/albums/${album.id}`)}
    >
      <AlbumCover album={album} width="100%" marginBottom={8} />
      <Text fontSize={18} fontFamily="bold" id={`album-${album.title}`}>
        {album.title}
      </Text>
      {showArtist && (
        <Text opacity={0.6} id={`artist-${album.artist.name}`}>
          {album.artist.name}
        </Text>
      )}
    </Container>
  );
}

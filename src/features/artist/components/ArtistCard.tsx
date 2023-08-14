import { useHover } from "@/hooks/useHover";
import { Container, Image, Text } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";
import { Artist } from "../types/Artist";

type ArtistCardProps = ComponentPropsWithoutRef<typeof Container> & {
  artist: Artist;
};

export function ArtistCard({ artist, ...props }: ArtistCardProps) {
  const [hovered, hoverProps] = useHover();

  const navigate = useNavigate();

  return (
    <Container
      {...props}
      {...hoverProps}
      padding={16}
      backgroundColor="#888"
      backgroundOpacity={hovered ? 0.4 : 0}
      borderRadius={8}
      onClick={() => navigate(`/artists/${artist.id}`)}
    >
      <Image
        id={`artist-image-${artist.id}`}
        url={artist.imageUrl}
        aspectRatio={1}
        borderRadius={100000}
        width="100%"
        marginBottom={16}
      />
      <Text
        horizontalAlign="center"
        fontSize={18}
        id={`artist-name-${artist.id}`}
      >
        {artist.name}
      </Text>
    </Container>
  );
}

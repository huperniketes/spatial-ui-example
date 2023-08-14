import { Container } from "@coconut-xr/koestlich";
import { Album } from "..";
import { AlbumCard } from "./AlbumCard";

type AlbumGridProps = {
  albums: Album[];
  size?: number;
  showArtist?: boolean;
};

export function AlbumGrid({ albums, showArtist, size = 300 }: AlbumGridProps) {
  return (
    <Container gapRow={8} gapColumn={8} flexDirection="row" flexWrap="wrap">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          album={album}
          flexBasis={size}
          flexGrow={1}
          showArtist={showArtist}
        />
      ))}
    </Container>
  );
}

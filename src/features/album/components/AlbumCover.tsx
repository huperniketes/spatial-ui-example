import { Image } from "@coconut-xr/koestlich";
import { ComponentPropsWithoutRef } from "react";
import { Album } from "../types/Album";

type AlbumCoverProps = Omit<ComponentPropsWithoutRef<typeof Image>, "url"> & {
  album: Album;
};

export function AlbumCover({ album, ...props }: AlbumCoverProps) {
  return (
    <Image
      url={album.coverUrl}
      id={`album-cover-${album.id}`}
      aspectRatio={1 / 1}
      borderRadius={8}
      {...props}
    />
  );
}

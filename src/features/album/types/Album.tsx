import { Artist } from "@/features/artist";

export type Album = {
  id: string;
  coverUrl: string;
  title: string;
  artist: Artist;
};

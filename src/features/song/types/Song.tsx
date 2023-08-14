import { Album } from "@/features/album";

export type Song = {
  id: string;
  title: string;
  getAlbum(): Album;
  duration: string;
};

import { Song } from "@/features/song";
import { atom } from "jotai";

export const currentSongAtom = atom<Song | undefined>(undefined);
export const isPlayingAtom = atom(true);

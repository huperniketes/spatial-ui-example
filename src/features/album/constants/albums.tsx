import { artists } from "@/features/artist";
import cover1 from "../assets/1.jpg";
import cover10 from "../assets/10.jpg";
import cover11 from "../assets/11.jpg";
import cover12 from "../assets/12.jpg";
import cover2 from "../assets/2.jpg";
import cover3 from "../assets/3.jpg";
import cover4 from "../assets/4.jpg";
import cover5 from "../assets/5.jpg";
import cover6 from "../assets/6.jpg";
import cover7 from "../assets/7.jpg";
import cover8 from "../assets/8.jpg";
import cover9 from "../assets/9.jpg";
import { Album } from "../types/Album";

export const albums: Album[] = [
  {
    id: "1",
    title: "Cosmic Echoes",
    coverUrl: cover1,
    artist: artists[0],
  },
  {
    id: "2",
    title: "Dreams in Technicolor",
    coverUrl: cover2,
    artist: artists[1],
  },
  {
    id: "3",
    title: "Midnight Serenade",
    coverUrl: cover3,
    artist: artists[2],
  },
  {
    id: "4",
    title: "Electric Reverie",
    coverUrl: cover4,
    artist: artists[3],
  },
  {
    id: "5",
    title: "Serendipitous Echoes",
    coverUrl: cover5,
    artist: artists[4],
  },
  {
    id: "6",
    title: "Ethereal Whispers",
    coverUrl: cover6,
    artist: artists[5],
  },
  {
    id: "7",
    title: "Synaptic Sonatas",
    coverUrl: cover7,
    artist: artists[6],
  },
  {
    id: "8",
    title: "Arcane Rhythms",
    coverUrl: cover8,
    artist: artists[7],
  },
  {
    id: "9",
    title: "Dreamscape Chronicles",
    coverUrl: cover9,
    artist: artists[8],
  },
  {
    id: "10",
    title: "Harmonic Odyssey",
    coverUrl: cover10,
    artist: artists[9],
  },
  {
    id: "11",
    title: "Noir Nocturnes",
    coverUrl: cover11,
    artist: artists[10],
  },
  {
    id: "12",
    title: "Phases of Infinity",
    coverUrl: cover12,
    artist: artists[11],
  },
];

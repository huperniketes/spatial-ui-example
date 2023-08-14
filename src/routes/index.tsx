import { AlbumDetail, Albums } from "@/features/album";
import { Artists } from "@/features/artist";
import { ArtistDetail } from "@/features/artist/components/ArtistDetail";
import { Browse } from "@/features/browse";
import { Playlists } from "@/features/playlist";
import { Songs } from "@/features/song";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Browse />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/:id" element={<ArtistDetail />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/albums/:id" element={<AlbumDetail />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/playlists" element={<Playlists />} />
    </Routes>
  );
}

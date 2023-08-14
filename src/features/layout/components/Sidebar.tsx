import { Header } from "@/components/Header";
import { List, ListItem } from "@coconut-xr/apfel-kruemel";
import { Container, Text } from "@coconut-xr/koestlich";
import {
  GalleryVerticalEnd,
  Image,
  LayoutGrid,
  Music,
  UserCircle,
} from "@coconut-xr/lucide-koestlich";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header title="Library" subtitle="All Music" />
      <List marginX={-16}>
        <ListItem
          leadingAccessory={<LayoutGrid height={16} width={16} />}
          onClick={() => navigate("/")}
        >
          <Text>Browse</Text>
        </ListItem>
        <ListItem
          leadingAccessory={<UserCircle height={16} width={16} />}
          onClick={() => navigate("/artists")}
        >
          <Text>Artists</Text>
        </ListItem>
        <ListItem
          leadingAccessory={<Image height={16} width={16} />}
          onClick={() => navigate("/albums")}
        >
          <Text>Albums</Text>
        </ListItem>
        <ListItem
          leadingAccessory={<Music height={16} width={16} />}
          onClick={() => navigate("/songs")}
        >
          <Text>Songs</Text>
        </ListItem>
        <ListItem
          leadingAccessory={<GalleryVerticalEnd height={16} width={16} />}
          onClick={() => navigate("/playlists")}
        >
          <Text>Playlists</Text>
        </ListItem>
      </List>
    </Container>
  );
}

import { TabBar, TabBarItem } from "@coconut-xr/apfel-kruemel";
import { Text } from "@coconut-xr/koestlich";
import {
  Library,
  PlayCircle,
  Radio,
  Search,
} from "@coconut-xr/lucide-koestlich";

export function Tabs() {
  return (
    <TabBar value={2}>
      <TabBarItem value={1} icon={<PlayCircle />}>
        <Text>Play</Text>
      </TabBarItem>
      <TabBarItem value={2} icon={<Library />}>
        <Text>Library</Text>
      </TabBarItem>
      <TabBarItem value={3} icon={<Radio />}>
        <Text>Radio</Text>
      </TabBarItem>
      <TabBarItem value={4} icon={<Search />}>
        <Text>Search</Text>
      </TabBarItem>
    </TabBar>
  );
}

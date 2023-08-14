import { Glass, IconButton } from "@coconut-xr/apfel-kruemel";
import { Container, Image, Text } from "@coconut-xr/koestlich";
import {
  FastForward,
  List,
  MoreHorizontal,
  Pause,
  Play,
  Quote,
  Rewind,
  Volume2,
} from "@coconut-xr/lucide-koestlich";
import { useAtom, useAtomValue } from "jotai";
import { currentSongAtom, isPlayingAtom } from "..";

export function Controls() {
  const currentSong = useAtomValue(currentSongAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  if (!currentSong) return;

  return (
    <Glass
      borderRadius={100}
      flexDirection="row"
      alignItems="center"
      paddingY={4}
      paddingX={12}
      gapColumn={16}
    >
      <Container flexDirection="row" gapColumn={8}>
        <IconButton>
          <Rewind height={12} width={12} />
        </IconButton>
        <IconButton onClick={() => setIsPlaying((current) => !current)}>
          {isPlaying ? (
            <Pause height={16} width={16} />
          ) : (
            <Play height={16} width={16} />
          )}
        </IconButton>
        <IconButton>
          <FastForward height={12} width={12} />
        </IconButton>
      </Container>
      <Container
        backgroundColor="#666"
        backgroundOpacity={0.6}
        borderRadius={12}
        padding={4}
        flexDirection="row"
        gapColumn={12}
        flexBasis={400}
        alignItems="center"
        paddingRight={8}
      >
        <Image
          url={currentSong.getAlbum().coverUrl}
          height={48}
          aspectRatio={1}
          borderRadius={8}
        />
        <Container>
          <Text>{currentSong.title}</Text>
          <Text fontSize={14} opacity={0.6}>
            {currentSong.getAlbum().artist.name}
          </Text>
        </Container>
        <IconButton size="sm" marginLeft="auto">
          <MoreHorizontal width={4} height={4} />
        </IconButton>
      </Container>
      <Container flexDirection="row" gapColumn={8}>
        <IconButton>
          <Quote height={12} width={12} />
        </IconButton>
        <IconButton>
          <List height={12} width={12} />
        </IconButton>
        <IconButton>
          <Volume2 height={12} width={12} />
        </IconButton>
      </Container>
    </Glass>
  );
}

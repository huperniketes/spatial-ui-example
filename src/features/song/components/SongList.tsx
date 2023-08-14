import { currentSongAtom, isPlayingAtom } from "@/features/controls";
import { Song } from "@/features/song";
import { useHover } from "@/hooks/useHover";
import { Container, Text, noAnimation } from "@coconut-xr/koestlich";
import { Pause, Play } from "@coconut-xr/lucide-koestlich";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

type SongListProps = {
  songs: Song[];
  showAlbum?: boolean;
  showArtist?: boolean;
};

export function SongList({ songs, showAlbum, showArtist }: SongListProps) {
  return (
    <Container>
      <Container
        flexDirection="row"
        gapColumn={16}
        paddingX={16}
        marginBottom={8}
      >
        <Container flexBasis={20} />
        <Text flexBasis={0} flexGrow={1} fontSize={14} opacity={0.6}>
          Title
        </Text>
        {showArtist && (
          <Container flexBasis={0} flexGrow={1}>
            <Text fontSize={14} opacity={0.6}>
              Artist
            </Text>
          </Container>
        )}
        {showAlbum && (
          <Container flexBasis={0} flexGrow={1}>
            <Text fontSize={14} opacity={0.6}>
              Album
            </Text>
          </Container>
        )}
        <Container flexBasis={40} />
      </Container>
      {songs.map((song, index) => (
        <SongListRow
          key={song.id}
          song={song}
          index={index}
          showAlbum={showAlbum}
          showArtist={showArtist}
        />
      ))}
    </Container>
  );
}

type SongListRowProps = {
  song: Song;
  index: number;
  showAlbum?: boolean;
  showArtist?: boolean;
};

function SongListRow({ song, index, showAlbum, showArtist }: SongListRowProps) {
  const [hovered, hoverProps] = useHover();
  const [albumHovered, albumHoverProps] = useHover();
  const [artistHovered, artistHoverProps] = useHover();
  const navigate = useNavigate();
  const [currentSong, setCurrentSong] = useAtom(currentSongAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const isCurrent = currentSong?.id === song.id;

  return (
    <Container
      key={song.id}
      borderRadius={8}
      backgroundColor="#888"
      backgroundOpacity={hovered ? 0.4 : index % 2 === 0 ? 0.15 : 0}
      paddingX={16}
      flexDirection="row"
      height={48}
      gapColumn={16}
      alignItems="center"
      onClick={() => {
        if (isCurrent) {
          setIsPlaying((current) => !current);
        } else {
          setCurrentSong(song);
          setIsPlaying(true);
        }
      }}
      {...hoverProps}
    >
      <Container flexBasis={20} animation={noAnimation}>
        {hovered ? (
          isCurrent && isPlaying ? (
            <Pause height={16} width={16} />
          ) : (
            <Play height={16} width={16} />
          )
        ) : (
          <Text opacity={0.6}>{String(index + 1)}</Text>
        )}
      </Container>
      <Text flexBasis={0} flexGrow={1}>
        {song.title}
      </Text>
      {showArtist && (
        <Container flexBasis={0} flexGrow={1} flexDirection="row">
          <Text
            {...artistHoverProps}
            fontFamily={artistHovered ? "bold" : undefined}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/artists/${song.getAlbum().artist.id}`);
            }}
          >
            {song.getAlbum().artist.name}
          </Text>
        </Container>
      )}
      {showAlbum && (
        <Container flexBasis={0} flexGrow={1} flexDirection="row">
          <Text
            {...albumHoverProps}
            fontFamily={albumHovered ? "bold" : undefined}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/albums/${song.getAlbum().id}`);
            }}
          >
            {song.getAlbum().title}
          </Text>
        </Container>
      )}
      <Text opacity={0.6} flexBasis={40} horizontalAlign="right">
        {song.duration}
      </Text>
    </Container>
  );
}

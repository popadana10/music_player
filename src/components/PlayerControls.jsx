import PlayArrow from "@mui/icons-material/PlayArrow";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {
    const music = useMusicPlayer();

    return (
        <>
            <div>
                <p>{music.currentTrackName}</p>
            </div>
            <button onClick={music.playPreviousTrack}>Previous</button>
            <button onClick={music.togglePlay}>
                {music.isPlaying ? "Pause" : <PlayArrow />}
            </button>
            <button onClick={music.playNextTrack}>Next</button>
        </>
    );
};

export { PlayerControls };
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {
    const music = useMusicPlayer();

    return (
        <>
            <div>
                <p>{music.currentTruckName}</p>
            </div>
            <button onClick={music.playPreviousTrack}>Previous</button>
            <button>{music.isPlaying ? 'Pause' : 'Play'}</button>
            <button onClick={music.playNextTrack}>Next</button>
        </>
    )
};

export { PlayerControls };
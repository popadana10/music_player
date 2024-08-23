import { useMusicPlayer } from "../hooks/useMusicPlayer";

const TrackList = () => {
    const music = useMusicPlayer();

    return (
        <>
            {music.TrackList.map((track, index) => (
                <div key={`${track}_${index}`}>
                    <button onClick={() => music.playTrack(index)}>
                        {music.isPlaying && music.currentTruckIndex === index ? 'Pause' : 'Play'}
                    </button>
                    <div>Track Playing: {track.name}</div>
                </div>
            ))}

        </>
    )

}

export { TrackList };
// holds the state and helps pass it through

import { useContext } from "react";
import { MusicContext } from "../contexts/MusicContext";

const useMusicPlayer = () => {
    const [state, setState] = useContext(MusicContext);

// Function 1: togglePlay
    const togglePlay = () => {
        if (state.isPlaying) {
            setState({...state, isPlaying: false})
            state.audioPlayer.pause();
        } else {
            setState({...state, isPlaying: true})
            state.audioPlayer.play();
        }
    }

    const playTrack = (index) => {
        if(index === state.currentTruckIndex) {
            togglePlay();
        } else {
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.tracks[index].file)
            state.audioPlayer.play();
            setState({...state, currentTruckIndex: index, isPlaying: true})
        }
    }

    const playNextTrack = () => {
        let newIndex = null;
        state.currentTruckIndex === state.tracks.length -1 ? (newIndex = 0) : (newIndex = state.currentTruckIndex + 1);
        playTrack(newIndex)
    }

    const  playPreviousTrack = () => {
        let newIndex = null;
        state.currentTruckIndex === state.tracks.length -1 ? (newIndex = state.tracks.length -1) : (newIndex = state.currentTruckIndex - 1);
        playTrack(newIndex)
    }



    return {
        togglePlay, 
        playTrack, 
        playNextTrack,
        playPreviousTrack,
        currentTruckIndex: state.currentTruckIndex,
        currentTruckIndex: 
          state.currentTruckIndex !== null &&
          state.tracks[state.currentTruckIndex].name,
        trackList: state.tracks,
        isPlaying: state.isPlaying,
    };
};

export {useMusicPlayer};
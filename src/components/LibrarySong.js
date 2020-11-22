import React from "react";

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {
    const songSelectHandler = () => {
        //This is not nessesary course we have the song id allready, 
        //therefor setCurrentSong(song);
        //const selectedSong = songs.filter((state) => state.id === id); 
        //setCurrentSong(selectedSong[0]);
        setCurrentSong(song);
        //Add Active State class
        const newSongs = songs.map((song) => {
            if(song.id === id) {
                return{
                    ...song, active: true,
                };
            }else{
                return{
                    ...song, active: false,
                }
            }
        });
        setSongs(newSongs);
        //Check if the song is playing
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if(playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
        
    }
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>           
        </div>
    );
};

export default LibrarySong;
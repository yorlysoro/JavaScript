// Music Player with Arrow Functions

const playSong = (song) => {
    console.log(`Playing: ${song}`);
};

const pauseSong = () => {
    console.log('Song paused');
};

const stopSong = () => {
    console.log('Song stopped');
};

// Example usage
playSong('Imagine - John Lennon');
pauseSong();
stopSong();

// Additional functionality: Volume control
const setVolume = (level) => {
    console.log(`Volume set to: ${level}`);
};

setVolume(75);

// Additional functionality: Next and Previous song
const nextSong = () => {
    console.log('Playing next song');
};

const previousSong = () => {
    console.log('Playing previous song');
};

nextSong();
previousSong();

// Additional functionality: Shuffle playlist
const shufflePlaylist = () => {
    console.log('Playlist shuffled');
};

shufflePlaylist();

// Additional functionality: Repeat song
const repeatSong = () => {
    console.log('Repeating current song');
};

repeatSong();

// Additional functionality: Display current song
const displayCurrentSong = (song) => {
    console.log(`Current song: ${song}`);
};

displayCurrentSong('Imagine - John Lennon');

// Additional functionality: Mute and Unmute
const mute = () => {
    console.log('Volume muted');
};

const unmute = () => {
    console.log('Volume unmuted');
};

mute();
unmute();

// Additional functionality: Show playlist
const showPlaylist = (playlist) => {
    console.log('Current Playlist:');
    playlist.forEach((song, index) => {
        console.log(`${index + 1}. ${song}`);
    });
};

showPlaylist(['Imagine - John Lennon', 'Hey Jude - The Beatles', 'Bohemian Rhapsody - Queen']); 

// Additional functionality: Search song
const searchSong = (query) => {
    console.log(`Searching for: ${query}`);
};

searchSong('Bohemian Rhapsody');

// Additional functionality: Add song to playlist
const addSongToPlaylist = (song) => {
    console.log(`Added to playlist: ${song}`);
};

addSongToPlaylist('Stairway to Heaven - Led Zeppelin');

// Additional functionality: Remove song from playlist
const removeSongFromPlaylist = (song) => {
    console.log(`Removed from playlist: ${song}`);
};

removeSongFromPlaylist('Hey Jude - The Beatles');   

// Additional functionality: Get song duration
const getSongDuration = (song) => {
    console.log(`Duration of ${song} is 3:45`);
};

getSongDuration('Imagine - John Lennon');

// Additional functionality: Set playback speed
const setPlaybackSpeed = (speed) => {
    console.log(`Playback speed set to: ${speed}x`);
};

setPlaybackSpeed(1.5);

// Create a Object for the Music Player with all the functionalities in arrow functions
const MusicPlayer = {
    playSong: (song) => console.log(`Playing: ${song}`),
    pauseSong: () => console.log('Song paused'),
    stopSong: () => console.log('Song stopped'),
    setVolume: (level) => console.log(`Volume set to: ${level}`),
    nextSong: () => console.log('Playing next song'),
    previousSong: () => console.log('Playing previous song'),
    shufflePlaylist: () => console.log('Playlist shuffled'),
    repeatSong: () => console.log('Repeating current song'),
    displayCurrentSong: (song) => console.log(`Current song: ${song}`),
    mute: () => console.log('Volume muted'),
    unmute: () => console.log('Volume unmuted'),
    showPlaylist: (playlist) => {
        console.log('Current Playlist:');
        playlist.forEach((song, index) => {
            console.log(`${index + 1}. ${song}`);
        });
    },
    searchSong: (query) => console.log(`Searching for: ${query}`),
    addSongToPlaylist: (song) => console.log(`Added to playlist: ${song}`),
    removeSongFromPlaylist: (song) => console.log(`Removed from playlist: ${song}`),
    getSongDuration: (song) => console.log(`Duration of ${song} is 3:45`),
    setPlaybackSpeed: (speed) => console.log(`Playback speed set to: ${speed}x`)
};

// Example usage of MusicPlayer object
MusicPlayer.playSong('Hotel California - Eagles');
MusicPlayer.setVolume(85);
MusicPlayer.showPlaylist(['Hotel California - Eagles', 'Sweet Child O\' Mine - Guns N\' Roses']);

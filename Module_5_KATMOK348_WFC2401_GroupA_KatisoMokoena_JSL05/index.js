// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Numbers on the board", artist: "Pusha T", genre: "Hip hop" },
    { title: "Makhi", artist: "Mdu aka trp", genre: "Amapiano" },
    { title: "Dilika", artist: "Bongza", genre: "Amapiano" },
    { title: "Thank god 4 mer", artist: "Schoolboy Q", genre: "Hip hop" }

    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "Amapiano",
    "Groot" : "Hip hop",
    "Rocket": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.keys(guardians).map(guardian => {
        // Filter songs based on the preferred genre of the guardian
        const playlist = songs.filter(song => song.genre === guardians[guardian]);
        // Return the playlist for the current guardian
        return { guardian: guardian, playlist: playlist };
    });

    return playlists;
}

function displayPlaylists(playlists) {
    const playlistContainer = document.getElementById('playlists');

    // Display the playlists for each Guardian
    playlists.forEach(playlist => {
        const guardian = playlist.guardian;
        const songs = playlist.playlist;

        // Create a div element to represent the playlist
        const playlistElement = document.createElement('div');
        playlistElement.classList.add('playlist');

        // Create a header element to display the Guardian's name
        const header = document.createElement('h2');
        header.textContent = `${guardian}'s Playlist`;
        playlistElement.appendChild(header);

        // Create a ul element to display the list of songs
        const songList = document.createElement('ul');
        songs.forEach(song => {
            // Create an li element for each song
            const songItem = document.createElement('li');
            
            // Create a span element to display the song title and artist
            const songTitle = document.createElement('span');
            songTitle.innerHTML = `<span class="song-title">${song.title}</span> by ${song.artist}`;
            
            // Append the song title to the song item
            songItem.appendChild(songTitle);
            
            // Append the song item to the song list
            songList.appendChild(songItem);
        });

        // Append the song list to the playlist element
        playlistElement.appendChild(songList);

        // Append the playlist element to the playlist container
        playlistContainer.appendChild(playlistElement);
    });
}


// Call generatePlaylist and display the playlists for each Guardian
const playlist = generatePlaylist(guardians, songs);

//console.log(playlists);
// Call generatePlaylist and display the playlists for each Guardian
//console.log(generatePlaylist(guardians, songs));

displayPlaylists(playlist);

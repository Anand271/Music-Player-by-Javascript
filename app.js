
const img = document.querySelector('img');
const music = document.querySelector('audio');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const artist = document.getElementById('artist');
const title = document.getElementById('title');


const songs = [
    {
    name: "anand-1",
    title:"1st Song",
    artist: "Artist Name (1)"
},

{
    name: "anand-2",
    title:" 2st Song",
    artist: "Artist Name (2)"
},

{
    name: "anand-3",
    title:"3st Song",
    artist: "Artist Name (3)"
},
{
    name: "anand-4",
    title:"4th song",
    artist: "Artist Name (5)"
},
{
    name: "anand-5",
    title:"5th song",
    artist: "Artist Name (6)"
}
]


 let isPlaying = false; 


 //for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play' ,'fa-pause');
    img.classList.add('animetion')
};

// for pause function
const pauseMusic =  () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause' ,'fa-play');
    img.classList.remove('animetion')
};


play.addEventListener('click' , () => {
    // if(isPlaying){
    //        pauseMusic();
    // }else{
    //     playMusic();
    // }

    isPlaying ? pauseMusic() : playMusic();
});




//changing the music data

const loadSong = (songs) => {
   title.textContent = songs.title;
   artist.textContent = songs.artist;
   music.src = "music/"+songs.name+".mp3";
   img.src = "img/"+songs.name+".jpg"; 

;}

songIndex = 0;
loadSong(songs[0]);

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

 function prevSong () {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
        loadSong(songs[songIndex]);
        playMusic();
 }
 // const prevSong = () =>{
//     songIndex = (songIndex - 1 + songs.length) % songs.length;
//     loadSong(songs[songIndex]);
//     playMusic();
// }

next.addEventListener('click' , nextSong)
prev.addEventListener('click' , prevSong)

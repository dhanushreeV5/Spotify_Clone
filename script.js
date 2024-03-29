console.log("welcome to spotify");
//initialize the variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Katheyondu shuruvaagidhe",filepath:"songs/1.mp3",coverpath:"covers/10.jpg"},
    {songName:"o-re-piya Salam-e-Ishq",filepath:"songs/2.mp3",coverpath:"covers/9.jpg"},
    {songName:"tu jaana Salam-e-Ishq",filepath:"songs/3.mp3",coverpath:"covers/8.jpg"},
    {songName:"cruel summer Salam-e-Ishq",filepath:"songs/4.mp3",coverpath:"covers/7.jpg"},
    {songName:"love-story Salam-e-Ishq",filepath:"songs/5.mp3",coverpath:"covers/6.jpg"},
    {songName:"o-nanna-manave Salam-e-Ishq",filepath:"songs/6.mp3",coverpath:"covers/5.jpg"},
    {songName:"Salam-e-Ishq",filepath:"songs/7.mp3",coverpath:"covers/4.jpg"},
    {songName:"Salam-e-Ishq",filepath:"songs/8.mp3",coverpath:"covers/3.jpg"},
    {songName:"Salam-e-Ishq",filepath:"songs/9.mp3",coverpath:"covers/2.jpg"},
    {songName:"Salam-e-Ishq",filepath:"songs/10.mp3",coverpath:"covers/1.jpg"},
]
songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audio element.play

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seek bar 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
        
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
        
})
const getElement = (element)=>{
    let ele = document.querySelectorAll(element);
    for (let i = 0; i < ele.length; i++) {
        return ele[i];
    }
};

const audioPlayer = getElement('#player');
const playBtn = getElement('#playButton');
const playIcon = getElement('#playIcon');

const togglePlay = player => {
    if(player.paused){
        player.play();
        playIcon.src = './img/controls/pause.svg';
    }else{
        player.pause();
        playIcon.src = './img/controls/play.svg';
    }
    playBtn.classList.toggle('playing');
}

playBtn.addEventListener('click', e => {
    e.preventDefault();
    togglePlay(audioPlayer);
});

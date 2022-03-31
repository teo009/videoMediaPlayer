import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';

const video = document.querySelector('video')
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
    ] 
})

const playButton = document.getElementById('playButton')
playButton.onclick = () => player.togglePlay()

const unmuteButton = document.getElementById('muteButton')
unmuteButton.onclick = () => {
    if(player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
}

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}
import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const player = new MediaPlayer({ 
    el: video, 
    plugins: [new AutoPlay()] 
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
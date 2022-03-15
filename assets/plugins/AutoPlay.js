function AutoPlay() {
    //Write something amazing here
}
AutoPlay.prototype.run = function(player) {
    player.mute()
    player.play()
}

export default AutoPlay
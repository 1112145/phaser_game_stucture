// This script play my music background in looping mode. EX: main theme game song.

//  Music constant. Change all our constant here.
MUSIC_CONSTANT = {
    defaultVolume: 1,
    defaultSong: 'themeSong'
}



// Music Player constructor
MusicPlayer = function() {
    this.create();
}



// Music Player prototype
MusicPlayer.prototype = {
    create: function() {
        this.song = game.add.audio(MUSIC_CONSTANT.defaultSong);
        this.volume = MUSIC_CONSTANT.defaultVolume; // This player volume. Default is 1. Value from 0 to 1.

    },
    // play this music

    play: function() {
        this.song.play();
        this.song.loopFull(); // Loop this song.
    },
    autoplay() {

    },
    replay: function() {

    },
    stop: function() {

    },
    pause: function() {

    },

    changeSong: function() {

    },
    changeVolume: function(volume) {
        this.volume = volume;
    }
}

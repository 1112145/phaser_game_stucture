// This script play my music background in looping mode. EX: main theme game song.

//  Music constant. Change all our constant here.
MUSIC_CONSTANT = {
    defaultVolume: 1,
    defaultSong: 'au_themesong'
}



MusicPlayer = function() {
    return this;
};



// Music Player prototype
MusicPlayer.prototype = {
    create: function() {
        if (this.song == null) {
            this.song = game.add.audio(MUSIC_CONSTANT.defaultSong);
            this.volume = MUSIC_CONSTANT.defaultVolume; // This player volume. Default is 1. Value from 0 to 1.
        }

    },
    // play this music
    play: function() {
        this.song.play();
        this.song.loopFull(); // Loop this song.
    },
    autoplay: function() {
        this.song.autoplay = true;
    },
    replay: function() {

    },
    stop: function() {
        this.song.stop();
    },
    pause: function() {
        this.song.pause();
    },
    resume: function() {
        this.song.resume();
    },
    changeSong: function(newSongName) {
        this.song = game.add.audio(newSongName);
    },
    mute: function() {
        this.song.mute = true;
    },
    unmute: function() {
        this.song.mute = false;
    },
    changeVolume: function(volume) {
        this.volume = volume;
    }
}

// Make a via singleton obj for quick access.
music = (function() {
    var obj = new MusicPlayer();
    return obj;
})();

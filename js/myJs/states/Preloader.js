// Preloader. Load all my game resources heres.


PRELOADER_CONST = {
    nextState: '' // Describe next state after this finished load.
}

 // Preloader constructor.
Preloader = function() {
    this.init();
}


// Preloader methods
Preloader.prototype = {
    preload: function() {
        this.createProgressText();
        game.load.onFileComplete.add(this.updateProgress, this);

        this.loadImages();
        this.loadAudios();
        this.loadSpriteSheets();
        this.loadAtlas();
        this.loadVideos();
    },
    create: function() {
        game.state.start(this.NEXT_STATE);
    }
}

Preloader.prototype.init = function() {
    this.NEXT_STATE = PRELOADER_CONST.nextState;
}

Preloader.prototype.createProgressText = function() {
    var style = {
        fill: 'white'
    }
    this.txtProgress = game.add.text(game.world.centerX, game.world.centerY, 'Loading: 0%', style);
    this.txtProgress.anchor.setTo(0.5);
}

Preloader.prototype.updateProgress = function(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.txtProgress.setText("Loading: " + progress + " % ");
}

/// LOADING SECTIONS.

/* Load images. */
// Syntax: game.load.image(img_keyname,GameConfig.PATH_IMG_SPRITES + fileName);

Preloader.prototype.loadImages = function() {
        // Load my images.
    }
    /* Load audios.*/
    // Syntax: game.load.audio(au_keyname,GameConfig.PATH_MUSIC/GameConfig.PATH_SFX + fileName);
Preloader.prototype.loadAudios = function() {
        // Load my Audios
    }
    /* Load sprite sheets*/
    // Syntax: game.load.spritesheets(sheet_spriteSheetName,GameConfig.PATH_IMG_SPRITESHEETS + fileName)
Preloader.prototype.loadSpriteSheets = function() {
        // Load my sprite sheets.
    }
    /* Load atlas */
    // Syntax: ...
Preloader.prototype.loadAtlas = function() {
        // Load my Atlas
    }
    /* Load videos*/
    // Syntax: ...
Preloader.prototype.loadVideos = function() {
    // Load my videos
    game.load.video('video_demo', GameConfig.PATH_VIDEO + 'video_demo.mp4');
}

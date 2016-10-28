// Preloader. Load all my game resources heres.


PRELOADER_CONST = {
    nextState: 'MainMenu', // Describe next state after this finished load.
    textStyle: {
        fill: 'white'
    },
    str_load_profile: 'Loading my profile: '
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
        // Init all via objects here.
        music.create();
        // Go to next state after finished loading all assets
        game.state.start(this.NEXT_STATE);
    }
}

Preloader.prototype.init = function() {
    this.NEXT_STATE = PRELOADER_CONST.nextState;
}

Preloader.prototype.createProgressText = function() {
    this.txtProgress = game.add.text(game.world.centerX, game.world.centerY,
        PRELOADER_CONST.str_load_profile + '0%', PRELOADER_CONST.textStyle);
    this.txtProgress.anchor.setTo(0.5);
}

Preloader.prototype.updateProgress = function(progress, cacheKey, success, totalLoaded, totalFiles) {
    this.txtProgress.setText(PRELOADER_CONST.str_load_profile + progress + " % ");
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
        game.load.audio('au_themesong', GameConfig.PATH_MUSIC + 'themesong.mp3');
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

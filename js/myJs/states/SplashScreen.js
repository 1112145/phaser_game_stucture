// Game SplashScreen. Show my logo.

// Adjust this state const here...
SPLASH_SCREEN_CONST = {
    FadeInTime: 2000,
    NextState: 'Preloader',
    LogoPath: GameConfig.PATH_IMG_SPRITES + 'logo.png',
    LogoPos: {
        x: GameConfig.width / 2,
        y: GameConfig.height / 2
    }
}


// SplashScreen constructor
SplashScreen = function() {
    this.init();
}

// This splashscreen methods.
SplashScreen.prototype = {
    // Build - in functions of the state. Override from base-class

    preload: function() {
        game.load.image('logo', this.PATH_LOGO);
    },
    create: function() {
        GameConfig.responsiveDisplay();
        GameConfig.randomMyFavorStageColor();

        this.logo = game.add.image(this.POS_LOGO.x, this.POS_LOGO.y, 'logo');
        this.fadeInLogo();
    },
    //
    // Customize functions of this state.
    //
    init() {
        this.FADE_IN_TIME = SPLASH_SCREEN_CONST.FadeInTime;
        this.NEXT_STATE = SPLASH_SCREEN_CONST.NextState;
        this.PATH_LOGO = SPLASH_SCREEN_CONST.LogoPath;
        this.POS_LOGO = SPLASH_SCREEN_CONST.LogoPos;

    },
    goToNextState: function() {
        game.state.start(this.NEXT_STATE);
    },
    fadeInLogo: function() {
        this.logo.anchor.setTo(0.5);
        this.logo.alpha = 0;
        var tween = game.add.tween(this.logo).to({
            alpha: 1
        }, this.FADE_IN_TIME, Phaser.Easing.Linear.None, true, 0, 0, true);
        tween.onComplete.add(function() {
            this.goToNextState();
        }, this);
    }

}

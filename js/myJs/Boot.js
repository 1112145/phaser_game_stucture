
game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.CANVAS, '');

game.state.add('SplashScreen',SplashScreen);
game.state.add('Preloader',Preloader);

// Start splash screen first.
game.state.start('SplashScreen');

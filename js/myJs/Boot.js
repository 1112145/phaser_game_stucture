// THIS SCRIPT CREATE MY GAME.

game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.CANVAS, '');

game.state.add('SplashScreen', SplashScreen);
game.state.add('Preloader', Preloader);
game.state.add('MainMenu', MainMenu);


// Start this state first. Change my state here
game.state.start('SplashScreen');

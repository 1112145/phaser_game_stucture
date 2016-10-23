
// Game SplashScreen

SplashScreen = function(game){
    this.FADE_IN_TIME =  2000;
    this.NEXT_STATE =  'Preloader';
    this.PATH_LOGO = GameConfig.PATH_IMG_SPRITES + 'logo.png';
    this.POS_LOGO = {x: game.width/2, y: game.height/2}
}


SplashScreen.prototype = {
  preload: function(){
      game.load.image('logo',this.PATH_LOGO);
  },
  create: function()
  {
      this.logo = game.add.image(this.POS_LOGO.x,this.POS_LOGO.y,'logo');
      this.fadeInLogo();
  },
  goToNextState: function()
  {
      game.state.start(this.NEXT_STATE);
  },
  fadeInLogo: function()
  {
    this.logo.anchor.setTo(0.5);
    this.logo.alpha = 0;
    var tween = game.add.tween(this.logo).to({ alpha: 1 }, this.FADE_IN_TIME, Phaser.Easing.Linear.None, true, 0, 0, true);
    tween.onComplete.add(function() {
        this.goToNextState();
    }, this);
  }

}

Preloader = function()
{
    this.NEXT_STATE = ''; // Describe next state after this finished load.
}

Preloader.prototype = {
  preload: function()
  {
      this.createProgressText();
      game.load.onFileComplete.add(this.updateProgress, this);

      this.loadImages();
      this.loadAudios();
      this.loadSpriteSheets();
      this.loadAtlas();
      this.loadVideos();
  },
  create: function(){
      game.state.start(this.NEXT_STATE);
  }
}

Preloader.prototype.createProgressText = function()
{
    this.txtProgress = game.add.text(game.world.centerX, game.world.centerY,'Loading: 0%',{fill: 'white'});
    this.txtProgress.anchor.setTo(0.5);
}

Preloader.prototype.updateProgress = function(progress, cacheKey, success, totalLoaded, totalFiles)
{
    this.txtProgress.setText("Loading: " + progress + " % ");
    console.log('run');
}

/// LOADING SECTIONS.
Preloader.prototype.loadImages = function()
{
    // Load my images.
}

Preloader.prototype.loadAudios = function()
{
  // Load my Audios
}

Preloader.prototype.loadSpriteSheets = function()
{
  // Load my sprite sheets.
}

Preloader.prototype.loadAtlas = function()
{
  // Load my Atlas
}

Preloader.prototype.loadVideos = function()
{
  // Load my videos
    game.load.video('video_demo',GameConfig.PATH_VIDEO + 'video_demo.mp4');
}

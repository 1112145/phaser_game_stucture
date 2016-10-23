Preloader = function(game)
{
    this.NEXT_STATE = ''; // Describe next state after this finished load.
}

Preloader.prototype = {
  preload: function()
  {
      this.loadImages();
      this.loadAudios();
      this.loadSpriteSheets();
      this.loadAtlas();
  },
  create: function(){
      game.state.start(this.NEXT_STATE);
  }
}


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

GameConfig = {
    // Game Size
    width: 1200,
    height: 600,
    // Path Quick Uses.
    PATH_IMG_SPRITES: 'assets/images/sprites/',
    PATH_IMG_SPRITESHEETS: 'assets/images/spritesheets/',
    PATH_IMG_ATLAS_SPRITES: 'assets/images/atlas_sprites/',
    PATH_MUSIC: 'assets/sounds/BG_MUSIC/',
    PATH_SFX: 'assets/sounds/SFX/',
    PATH_VIDEO: 'assets/videos/',

    responsiveDisplay: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //have the game centered horizontally
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        console.log(game.scale);
    },

    randomMyFavorStageColor: function()
    {
        var myFavorColor = [];
        myFavorColor.push('#2c3e50');
        myFavorColor.push('#34495e');
        myFavorColor.push('#7f8c8d');
        myFavorColor.push('#16a085');
        myFavorColor.push('#000000');

        var index = Math.floor(Math.random()*myFavorColor.length);

        game.stage.backgroundColor = myFavorColor[index];
    }

}

module PupPad.Client {

    export class Preloader extends Phaser.State {
        loaderText: Phaser.Text;
        assetLocation: string = "";
        boot() {
           
        }
        preload() {
            this.game.load.onLoadComplete.add(this.vanish, this);   
            this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...",
                { font: "18px Arial", fill: "#A9A91111", align: "center" });
            this.loaderText.anchor.setTo(0.5);
            //this.game.load.baseURL = 'http://utcsheffield.azurewebsites.net/pupPad/';
            //this.game.load.crossOrigin = 'anonymous';
            //this.game.load.image('background', this.assetLocation + 'assets/ui/background.jpg');
            this.game.load.image('chase', this.assetLocation + 'assets/sprites/111.png');
            this.game.load.image('marshall', this.assetLocation + 'assets/sprites/222.png');
            this.game.load.image('rocky', this.assetLocation + 'assets/sprites/rocky.png');
            this.game.load.image('rubble', this.assetLocation + 'assets/sprites/rubble.png');
            this.game.load.image('skye', this.assetLocation + 'assets/sprites/333.png');
            this.game.load.image('zuma', this.assetLocation + 'assets/sprites/444.png');
            this.game.load.image('badge', this.assetLocation + 'assets/sprites/badge.png');

            //this.load.image('logo', this.assetLocation + 'assets/ui/gameLogo.png');
            //this.load.audio('click', this.assetLocation + 'assets/sounds/click.ogg', true);
            this.game.load.audio('badgeAudio1', this.assetLocation + 'assets/sounds/badgeAudio1.ogg');
            this.game.load.audio('badgeAudio2', this.assetLocation + 'assets/sounds/badgeAudio2.ogg');
            this.game.load.audio('badgeAudio3', this.assetLocation + 'assets/sounds/badgeAudio3.ogg');
            this.game.load.audio('badgeAudio4', this.assetLocation + 'assets/sounds/badgeAudio4.ogg');
            this.game.load.audio('badgeAudio5', this.assetLocation + 'assets/sounds/badgeAudio5.ogg');

            this.game.load.audio('chaseAudio1', this.assetLocation + 'assets/sounds/chaseAudio1.ogg');
            this.game.load.audio('chaseAudio2', this.assetLocation + 'assets/sounds/chaseAudio2.ogg');

            this.game.load.audio('marshallAudio1', this.assetLocation + 'assets/sounds/marshallAudio1.ogg');
            this.game.load.audio('marshallAudio2', this.assetLocation + 'assets/sounds/marshallAudio2.ogg');

            this.game.load.audio('rockyAudio1', this.assetLocation + 'assets/sounds/rockyAudio1.ogg');

            this.game.load.audio('rubbleAudio1', this.assetLocation + 'assets/sounds/rubbleAudio1.ogg');

            this.game.load.audio('skyeAudio1', this.assetLocation + 'assets/sounds/skyeAudio1.ogg');

            this.game.load.audio('zumaAudio1', this.assetLocation + 'assets/sounds/zumaAudio1.ogg');
            this.game.load.audio('zumaAudio2', this.assetLocation + 'assets/sounds/zumaAudio2.ogg');
           
            //this.load.atlasJSONHash('level01-sprites', '.assets/sprites/level01-sprites.png', '.assets/sprites/level01-sprites.json');
        }

        create() {
           
           
        }

        vanish() {
            while (!this.game.load.hasLoaded) {

            }
             var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 1000,
                Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }
        startMainMenu() {
            this.game.state.start('PadMain', true, false);
        }

    }

}
module PupPad.Client {

    export class GameEngine extends Phaser.Game {

        constructor() {
            super(1024, 800, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('PadMain', PadMain, false);
            //this.state.add('Level01', Level01, false);

            this.state.start('Boot');

        }
    }
}

window.onload = () => {
    new PupPad.Client.GameEngine();
};
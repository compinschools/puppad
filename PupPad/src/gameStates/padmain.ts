module PupPad.Client {

    export class PadMain extends Phaser.State {

        maxBadge = 5;
        maxChase = 2;
        maxMarshall = 2;
        maxRocky = 1;
        maxRubble = 1;
        maxSkye = 1;
        maxZuma = 2;


        currentBadge = 5;
        currentChase = 2;
        currentMarshall = 2;
        currentRocky = 1;
        currentRubble = 1;
        currentSkye = 1;
        currentZuma = 2;

        background: Phaser.Sprite;
        //logo: Phaser.Sprite;
        chase: Phaser.Sprite;
        marshall: Phaser.Sprite;
        rubble: Phaser.Sprite;
        zuma: Phaser.Sprite;
        rocky: Phaser.Sprite;
        skye: Phaser.Sprite;
        badge: Phaser.Sprite;

        currentSound: Phaser.Sound;

        create() {
            this.stage.setBackgroundColor(0x5555FF);
            //this.background = this.add.sprite(0, 0, 'background');
            //this.background.alpha = 0;

            //this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            //this.logo.anchor.setTo(0.5);

            //this.add.tween(this.background).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            //this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 500);

            this.chase = this.add.sprite(this.world.centerX, 75, 'chase');
            this.chase.anchor.setTo(0.5);
            this.chase.inputEnabled = true;
            this.chase.events.onInputDown.add(this.chaseVoice, this);
                        //this.game.debug.text("Click the logo to start the game", 0, this.world.height, "red");

            this.skye = this.add.sprite(this.world.centerX, 550, 'skye');
            this.skye.anchor.setTo(0.5);
            this.skye.inputEnabled = true;
            this.skye.events.onInputDown.add(this.skyeVoice, this);

            this.marshall = this.add.sprite(this.world.centerX + 225, 225, 'marshall');
            this.marshall.anchor.setTo(0.5);
            this.marshall.inputEnabled = true;
            this.marshall.events.onInputDown.add(this.marshallVoice, this);

            this.rubble = this.add.sprite(this.world.centerX + 225, 450, 'rubble');
            this.rubble.anchor.setTo(0.5);
            this.rubble.inputEnabled = true;
            this.rubble.events.onInputDown.add(this.rubbleVoice, this);

            this.rocky = this.add.sprite(this.world.centerX - 225, 225, 'rocky');
            this.rocky.anchor.setTo(0.5);
            this.rocky.inputEnabled = true;
            this.rocky.events.onInputDown.add(this.rockyVoice, this);

            this.zuma = this.add.sprite(this.world.centerX - 225, 450, 'zuma');
            this.zuma.anchor.setTo(0.5);
            this.zuma.inputEnabled = true;
            this.zuma.events.onInputDown.add(this.zumaVoice, this);

            this.badge = this.add.sprite(this.world.centerX, 300, 'badge');
            this.badge.anchor.setTo(0.5);
            this.badge.inputEnabled = true;
            this.badge.events.onInputDown.add(this.badgeVoice, this);

            this.currentSound = this.add.audio('chaseAudio1', 1, false);
            //this.input.onDown.addOnce(this.fadeOut, this);
        }

        badgeVoice() {

            this.currentBadge++;
            if (this.currentBadge > this.maxBadge) this.currentBadge = 1;

            this.currentSound.stop();
            this.currentSound = this.add.audio('badgeAudio' + this.currentBadge.toString(), 1, false);
            this.currentSound.play();
            //this.game.debug.text("Badge Audio 1", 0, this.world.height, "red");
        }

        chaseVoice() {

            this.currentChase++;
            if (this.currentChase > this.maxChase) this.currentChase = 1;
            
            this.currentSound.stop();
            this.currentSound = this.add.audio('chaseAudio' + this.currentChase.toString(), 1, false);
            this.currentSound.play();
            //this.game.debug.text("Chase Audio 1", 0, this.world.height, "red");
        }

        marshallVoice() {
            this.currentMarshall++;
            if (this.currentMarshall > this.maxMarshall) this.currentMarshall = 1;

            this.currentSound.stop();
            this.currentSound = this.add.audio('marshallAudio' + this.currentMarshall.toString(), 1, false);
            this.currentSound.play();
            //this.game.debug.text("marshall Audio 1", 0, this.world.height, "red");
        }

        rubbleVoice() {
            this.currentRubble++;
            if (this.currentRubble > this.maxRubble) this.currentRubble = 1;

            this.currentSound.stop();
            this.currentSound = this.add.audio('rubbleAudio' + this.currentRubble.toString(), 1, false);
            this.currentSound.play();
            //this.game.debug.text("rubble Audio 1", 0, this.world.height, "red");
        }

        skyeVoice() {
            this.currentSkye++;
            if (this.currentSkye > this.maxSkye) this.currentSkye = 1;

            this.currentSound.stop();
            this.currentSound = this.add.audio('skyeAudio' + this.currentSkye.toString(), 1, false);
            this.currentSound.play();
            //this.game.debug.text("skye Audio 1", 0, this.world.height, "red");
        }

        rockyVoice() {
            this.currentRocky++;
            if (this.currentRocky > this.maxRocky) this.currentRocky = 1;

            this.currentSound.stop();
            this.currentSound = this.add.audio('rockyAudio' + this.currentRocky.toString(), 1, false);
            this.currentSound.play();
            //this.game.debug.text("rocky Audio 1", 0, this.world.height, "red");
        }

        zumaVoice() {
            this.currentZuma++;
            if (this.currentZuma > this.maxZuma) this.currentZuma = 1;

            this.currentSound.stop();
            this.currentSound = this.add.audio('zumaAudio' + this.currentZuma.toString(), 1, false);
            this.currentSound.play();
            //this.game.debug.text("zuma Audio 1", 0, this.world.height, "red");
        }

        /*fadeOut() {
            this.add.audio('click', 1, false).play();
            
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }

        startGame() {
            this.game.state.start('Level01', true, false);
        }*/

    }

}
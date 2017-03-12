var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PupPad;
(function (PupPad) {
    var Client;
    (function (Client) {
        var GameEngine = (function (_super) {
            __extends(GameEngine, _super);
            function GameEngine() {
                _super.call(this, 1024, 800, Phaser.AUTO, 'content', null);
                this.state.add('Boot', Client.Boot, false);
                this.state.add('Preloader', Client.Preloader, false);
                this.state.add('PadMain', Client.PadMain, false);
                this.state.start('Boot');
            }
            return GameEngine;
        }(Phaser.Game));
        Client.GameEngine = GameEngine;
    })(Client = PupPad.Client || (PupPad.Client = {}));
})(PupPad || (PupPad = {}));
window.onload = function () {
    new PupPad.Client.GameEngine();
};
var PupPad;
(function (PupPad) {
    var Client;
    (function (Client) {
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player(game, x, y) {
                _super.call(this, game, x, y, 'level01-sprites', 1);
                this.anchor.setTo(0.5);
                this.animations.add('fly', [0, 1], 5, true);
                game.add.existing(this);
                game.physics.enable(this);
                this.body.collideWorldBounds = true;
                this.body.setCircle(20);
            }
            Player.prototype.update = function () {
                this.body.velocity.x = 0;
                if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                    this.body.velocity.x = -50;
                    this.animations.play('fly');
                    if (this.scale.x === -1) {
                        this.scale.x = 1;
                    }
                }
                else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                    this.body.velocity.x = 50;
                    this.animations.play('fly');
                    if (this.scale.x === 1) {
                        this.scale.x = -1;
                    }
                }
                else {
                    this.animations.frame = 0;
                }
            };
            return Player;
        }(Phaser.Sprite));
        Client.Player = Player;
    })(Client = PupPad.Client || (PupPad.Client = {}));
})(PupPad || (PupPad = {}));
var PupPad;
(function (PupPad) {
    var Client;
    (function (Client) {
        var Boot = (function (_super) {
            __extends(Boot, _super);
            function Boot() {
                _super.apply(this, arguments);
            }
            Boot.prototype.preload = function () {
            };
            Boot.prototype.create = function () {
                this.stage.setBackgroundColor(0x5555FF);
                this.input.maxPointers = 1;
                this.stage.disableVisibilityChange = true;
                if (this.game.device.desktop) {
                    this.scale.pageAlignHorizontally = true;
                }
                else {
                    this.scale.minWidth = 480;
                    this.scale.minHeight = 260;
                    this.scale.maxWidth = 1024;
                    this.scale.maxHeight = 768;
                    this.scale.forceLandscape = true;
                    this.scale.pageAlignHorizontally = true;
                    this.scale.refresh();
                }
                this.game.state.start('Preloader', true, false);
            };
            return Boot;
        }(Phaser.State));
        Client.Boot = Boot;
    })(Client = PupPad.Client || (PupPad.Client = {}));
})(PupPad || (PupPad = {}));
var PupPad;
(function (PupPad) {
    var Client;
    (function (Client) {
        var PadMain = (function (_super) {
            __extends(PadMain, _super);
            function PadMain() {
                _super.apply(this, arguments);
                this.maxBadge = 5;
                this.maxChase = 2;
                this.maxMarshall = 2;
                this.maxRocky = 1;
                this.maxRubble = 1;
                this.maxSkye = 1;
                this.maxZuma = 2;
                this.currentBadge = 5;
                this.currentChase = 2;
                this.currentMarshall = 2;
                this.currentRocky = 1;
                this.currentRubble = 1;
                this.currentSkye = 1;
                this.currentZuma = 2;
            }
            PadMain.prototype.create = function () {
                this.chase = this.add.sprite(this.world.centerX, 75, 'chase');
                this.chase.anchor.setTo(0.5);
                this.chase.inputEnabled = true;
                this.chase.events.onInputDown.add(this.chaseVoice, this);
                this.skye = this.add.sprite(this.world.centerX, 600, 'skye');
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
            };
            PadMain.prototype.badgeVoice = function () {
                this.currentBadge++;
                if (this.currentBadge > this.maxBadge)
                    this.currentBadge = 1;
                this.currentSound.stop();
                this.currentSound = this.add.audio('badgeAudio' + this.currentBadge.toString(), 1, false);
                this.currentSound.play();
            };
            PadMain.prototype.chaseVoice = function () {
                this.currentChase++;
                if (this.currentChase > this.maxChase)
                    this.currentChase = 1;
                this.currentSound.stop();
                this.currentSound = this.add.audio('chaseAudio' + this.currentChase.toString(), 1, false);
                this.currentSound.play();
            };
            PadMain.prototype.marshallVoice = function () {
                this.currentMarshall++;
                if (this.currentMarshall > this.maxMarshall)
                    this.currentMarshall = 1;
                this.currentSound.stop();
                this.currentSound = this.add.audio('marshallAudio' + this.currentMarshall.toString(), 1, false);
                this.currentSound.play();
            };
            PadMain.prototype.rubbleVoice = function () {
                this.currentRubble++;
                if (this.currentRubble > this.maxRubble)
                    this.currentRubble = 1;
                this.currentSound.stop();
                this.currentSound = this.add.audio('rubbleAudio' + this.currentRubble.toString(), 1, false);
                this.currentSound.play();
            };
            PadMain.prototype.skyeVoice = function () {
                this.currentSkye++;
                if (this.currentSkye > this.maxSkye)
                    this.currentSkye = 1;
                this.currentSound.stop();
                this.currentSound = this.add.audio('skyeAudio' + this.currentSkye.toString(), 1, false);
                this.currentSound.play();
            };
            PadMain.prototype.rockyVoice = function () {
                this.currentRocky++;
                if (this.currentRocky > this.maxRocky)
                    this.currentRocky = 1;
                this.currentSound.stop();
                this.currentSound = this.add.audio('rockyAudio' + this.currentRocky.toString(), 1, false);
                this.currentSound.play();
            };
            PadMain.prototype.zumaVoice = function () {
                this.currentZuma++;
                if (this.currentZuma > this.maxZuma)
                    this.currentZuma = 1;
                this.currentSound.stop();
                this.currentSound = this.add.audio('zumaAudio' + this.currentZuma.toString(), 1, false);
                this.currentSound.play();
            };
            return PadMain;
        }(Phaser.State));
        Client.PadMain = PadMain;
    })(Client = PupPad.Client || (PupPad.Client = {}));
})(PupPad || (PupPad = {}));
var PupPad;
(function (PupPad) {
    var Client;
    (function (Client) {
        var Preloader = (function (_super) {
            __extends(Preloader, _super);
            function Preloader() {
                _super.apply(this, arguments);
                this.assetLocation = "";
            }
            Preloader.prototype.boot = function () {
            };
            Preloader.prototype.preload = function () {
                this.loaderText = this.game.add.text(this.world.centerX, 200, "Loading...", { font: "18px Arial", fill: "#A9A91111", align: "center" });
                this.loaderText.anchor.setTo(0.5);
                this.game.load.image('chase', this.assetLocation + 'assets/sprites/111.png');
                this.game.load.image('marshall', this.assetLocation + 'assets/sprites/222.png');
                this.game.load.image('rocky', this.assetLocation + 'assets/sprites/rocky.png');
                this.game.load.image('rubble', this.assetLocation + 'assets/sprites/rubble.png');
                this.game.load.image('skye', this.assetLocation + 'assets/sprites/333.png');
                this.game.load.image('zuma', this.assetLocation + 'assets/sprites/444.png');
                this.game.load.image('badge', this.assetLocation + 'assets/sprites/badge.png');
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
                this.game.load.onLoadComplete.add(this.vanish, this);
            };
            Preloader.prototype.create = function () {
            };
            Preloader.prototype.vanish = function () {
                while (!this.game.load.hasLoaded) {
                }
                var tween = this.add.tween(this.loaderText).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
                tween.onComplete.add(this.startMainMenu, this);
            };
            Preloader.prototype.startMainMenu = function () {
                this.game.state.start('PadMain', true, false);
            };
            return Preloader;
        }(Phaser.State));
        Client.Preloader = Preloader;
    })(Client = PupPad.Client || (PupPad.Client = {}));
})(PupPad || (PupPad = {}));
//# sourceMappingURL=game.js.map
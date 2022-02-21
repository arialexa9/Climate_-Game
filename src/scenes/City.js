
// You can write more code here

/* START OF COMPILED CODE */

class City extends Phaser.Scene {

	constructor() {
		super("City");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// cityV2
		const cityV2 = this.add.tilemap("cityV2");
		cityV2.addTilesetImage("City", "city-tilesV1");

		// ground_1
		const ground_1 = cityV2.createLayer("Ground", ["City"], 4, -97);
		ground_1.scaleX = 1.25;
		ground_1.scaleY = 1.25;

		// world_Layer
		const world_Layer = cityV2.createLayer("World Layer", ["City"], 4, -97);
		world_Layer.scaleX = 1.25;
		world_Layer.scaleY = 1.25;

		// lights
		const lights = cityV2.createLayer("Lights", ["City"], 4, -97);
		lights.scaleX = 1.25;
		lights.scaleY = 1.25;

		// windows_and_Doors
		const windows_and_Doors = cityV2.createLayer("Windows and Doors", ["City"], 4, -97);
		windows_and_Doors.scaleX = 1.25;
		windows_and_Doors.scaleY = 1.25;

		// health_bar_decoration
		const health_bar_decoration = this.add.image(691, 44, "health_bar_decoration");
		health_bar_decoration.scaleX = 2.876226221353047;
		health_bar_decoration.scaleY = 2.876226221353047;

		// life_Bar_Animated_1
		const life_Bar_Animated_1 = this.add.image(713, 44, "Life Bar Animated 1");
		life_Bar_Animated_1.scaleX = 1.801947436688974;
		life_Bar_Animated_1.scaleY = 1.801947436688974;

		var buttonClicked = this.sound.add("buttonOnClick");

		// menu
		const menu = this.add.image(49, 41, "Menu");
		menu.scaleX = 0.6972659199911628;
		menu.scaleY = 0.6818283014111137;
		menu.setInteractive();
		menu.on("pointerdown", () => {
            buttonClicked.play();
            this.scene.start("City_Pause");
		}).on("pointerover", () => {
      		menu.scale += 0.05;
    	}).on("pointerout", () => {
			menu.scaleX = 0.6972659199911628;
			menu_.scaleY = 0.6818283014111137;
		});

		// directionpad
		this.add.image(692, 520, "D-Pad");

		// score
		const score = this.add.image(384, 44, "Score");
		score.scaleX = 0.62297233942359;
		score.scaleY = 0.62297233942359;

		this.cityV2 = cityV2;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
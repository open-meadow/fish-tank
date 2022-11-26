class SwitchFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = '/images/bigFish.png';
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}

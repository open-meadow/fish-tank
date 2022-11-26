class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
  }

  updateOneTick() {
    this.makeNewVelocity();
  }

  onClick(event) {
    this.makeNewVelocity(500);
    this.kill();
  }
}

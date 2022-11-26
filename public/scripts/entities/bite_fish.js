class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
  }

  generateSwimVelocity() {}

  updateOneTick() {
    this.makeNewVelocity();
    // this.position.addMut(delta); - this stops everything...for some reason
    // this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
  }

  onClick(event) {
    // this.makeNewVelocity(500);
    this.kill(SwitchFish, GoFish);
  }
}

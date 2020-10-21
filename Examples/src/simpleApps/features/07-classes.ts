class MegaVehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("Hong Hong!");
  }
}

const carX = new MegaVehicle("orang");
console.log(carX.color);

class MegaCar extends MegaVehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log(this.color);
    console.log("vroom...");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const carZ = new MegaCar(4, "green");
carZ.startDrivingProcess();

class Alpha {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel; // we can assignee the readonly prop from the constructor
  }
}
// or we can do like this:
class Car2 {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) { // will automatically create a readonly field 'model' and assignee the model var from the constructor to it
  }
}

// modificators
class Animal {
  public color: string = 'black';
  protected voice: string = '';

  constructor() {
    this.go(); // will work fine
  }
  private go() {
    console.log('Go!');
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice;
    // this.go(); // error Property 'go' is private and only accessible within class 'Animal'.ts(2341)
  }
}

const cat = new Cat();
cat.setVoice('miyau');
// cat.voice // error cause .voice is protected
cat.color = 'red'; // cause .color is public


// Abstract classes

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render() {
    console.log('Render!');
  }
  info() {
    return 'This is app component';
  }
}
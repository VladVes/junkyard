console.log('decorators connected!');

function DecLog(constructor: Function) {
  console.log('arg constructor from decorator Log: ', constructor); // the SuperComponent class will be in the constructor

}

function DecProp(target: any, propName: string | symbol) {
  console.log('target from decorator DecProp: ', target); // here will be class 
  console.log('propName from decorator DecProp: ', propName); // here will be property 
}

function DecMeth(target: any, propName: string | symbol, descriptor: PropertyDescriptor) {
  console.log('target from decorator DecMeth: ', target); // here will be class 
  console.log('propName from decorator DecMeth: ', propName); // here will be property 
  console.log('descriptor from decorator DecMeth: ', descriptor); // here will be property 
}

function DecGetter(target: any, propName: string | symbol, descriptor: PropertyDescriptor) {
  console.log('target from decorator DecGetter: ', target); // here will be class 
  console.log('propName from decorator DecGetter: ', propName); // here will be property 
  console.log('descriptor from decorator DecGetter: ', descriptor); // here will be property 
}

@DecLog
class SuperComponent {
  @DecProp
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  @DecMeth
  printName(): void {
    console.log(`Component Name: ${this.name}`);
  }

  @DecGetter
  get componentName() {
    return this.name;
  }

}

// ====================================================

interface ComponentDecorator {
  selector: string;
  template: string;
}

function DecComponent(config: ComponentDecorator) {
  return function<T extends { new(...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);
        const el = document.querySelector(config.selector)!;
        el.innerHTML = config.template;
      } 
    }
  }
}

function Bind(_1: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value; // to get the ref to the method
  return {
    configurable: true,
    enumerable: true,
    get() {
      return original.bind(this);
    }
  };
}

@DecComponent({
  selector: '#card',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Card component!</span>
      </div>
    </div>
  `
})
class CardComponent {
  constructor(public name: string) {
  }
 
  @Bind
  logName(): void {
    console.log(`Component Name: ${this.name}`);
  }
}

const card = new CardComponent('Super Card');

const btn = document.querySelector('#btn');
btn?.addEventListener('click', card.logName ); // don't need to bind context because we applied the Bind decorator for the method logName 



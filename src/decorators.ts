
const rect31: RectWithArea = {
  id: '444sdf',
  size: {
    width: 42,
    height: 22,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};

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

const newComp = new SuperComponent('I am super component');
console.log('New component name: ', newComp.componentName);

console.log('========================================================');
// ====================================================

// type syntax explanation
type FnA = {
  (s: string): object;
  a: string;
};
// the same as 
type FnA2 = (s: string) => object;

type AnyClass = {
  new(...args: any[]): object;
};
//the same as 
type AnyClass2 = new(...args: any[]) => object;

type overLoadedFn = {
  (): void;
  (s: string): number;
}

// overloaded fn what should be implemented 
function FFF(a1: string): string;
function FFF(a2: number): number;
function FFF(a: string | number): string | number | undefined {
  if (typeof a === 'string') {
    return '';
  }
  if (typeof a === 'number') {
    return 1;
  }
};

type FF = {
  (a1: string): string;
  q: Symbol;
  fn: {
    (): void;
    (s: string): number;
    a: number;
  }
}

function a(b: FF): {} {
  const q = b("2")
  const bq = b.q
  return {};
}

a.q = 'qwe';

class AA {}

// const ac1: AnyClass = a;
const ac2: AnyClass = AA;
// const ac3: AnyClass = {};


function Bind(_1: any, propName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value; // to get ref to the method
  console.log('From Bind decorator - descriptor: ', descriptor);
  const result = {
    configurable: true,
    enumerable: true,
    get() {
      console.log(`This from decorated method ${propName}: `, this);
      return original.bind(this);
    }
  };
  console.log('RESULT: ', result);
  return result;
}

interface ComponentDecorator {
  selector: string;
  template: string;
}

function DecComponent(config: ComponentDecorator) {
  return function<T extends  new(...args: any[]) => object>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);
        const el = document.querySelector(config.selector)!;
        el.innerHTML = config.template;
      } 
    }
  }
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

console.log('CLASS CARD COMPONENT DECORATED: ', CardComponent);
const card = new CardComponent('Super Card');
console.log('Instance of CARD COMPONENT DECORATED: ', card, card.logName);

const btn = document.querySelector('#btn');
btn?.addEventListener('click', card.logName ); // don't need to bind context because we applied the Bind decorator for the method logName 

console.log('========================================================');


// =================================================

type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
  [prop: string]: {
    [validator: string]: ValidatorType;
  }
};

const validators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: 'required'
  }
  console.log('Required decorator has been applied.');
  console.log('Required decorator - target: ', target);
  console.log('Required decorator - propName: ', propName);
  console.log('Required decorator - validators: ', validators);
}

class Form {
  @Required
  public email: string | undefined;

  constructor(email?: string) {
    this.email = email;
  }
}

function validate(obj: any): boolean {
  console.log('validators from validate fn: ', validators);
  const objConfig = validators[obj.constructor.name];
  if (!objConfig) {
    return true;
  }
  let isValid = true;
  Object.keys(objConfig).forEach(key => {
    if (objConfig[key] === 'required') {
      isValid = isValid && !!obj[key];
    }
  })
  return isValid;
}

const form1 = new Form();
console.log('FORM: ', form1);

if (validate(form1)) {
  console.log('Valid: ', form1);
} else {
  console.log('Form1 Validation Error: ', form1);
}

const form2 = new Form('some@mail.com');
console.log('FORM: ', form2);

if (validate(form1)) {
  console.log('Form2 Valid: ', form2);
} else {
  console.log('Validation Error');
}


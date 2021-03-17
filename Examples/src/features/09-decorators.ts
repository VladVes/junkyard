class Boat {
  // @testDecorator1
  color: string = 'green';

  // @testDecorator2
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Oops, boat was sunk')
  run(@paramDecorator speed: number, @paramDecorator generateWake: boolean): void {
    throw new Error();
    console.log('swish')
  }

  // @logError('Oops, boat was sunk')
  pilot(): void {
    throw new Error();
    console.log('swish')
  }
}

function paramDecorator(target: any, key: string, index: number) { // декоратор на параметры
  console.log(key);
  console.log(index);
}


function testDecorator2(target: any, key: string, desc: PropertyDescriptor) { // декоратор на акксессоре
  console.log(target);
  console.log(key);
  console.log(desc);
}

function testDecorator1(target: any, key: string) {
  console.log(target); //невозможно прочиатать значение свойсва объекта target[key] или даже так target.color
  // target всегда хранит только прототип объекта, все свойства определяются в его конструкторе
  // таким образом использование декоратора на свойства малополезно, т.к. не позволяет не на что особо повлиять
  console.log(key);
  // console.log(desc);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    }
  }
}

// new Boat().pilot();
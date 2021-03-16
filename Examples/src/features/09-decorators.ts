class Boat {
  color: string = 'green';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }
  @logError
  pilot(): void {
    throw new Error();
    console.log('swish')
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log(target);
  console.log(key);
}
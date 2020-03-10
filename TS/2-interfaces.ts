interface Rectangle {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  }
};

const rect1: Rectangle = {
  id: '23123',
  size: {
    width: 10,
    height: 38,
  },
};
// rect1.id = 'asdfasf'; // error because the 'id' property was declared with readonly
rect1.color = 'black'; // no error because of 'color?'
const rect2 = {} as Rectangle;

// extends
interface RectWithArea extends Rectangle {
  getArea: () => number;
}

const rect3: RectWithArea = {
  id: '444sdf',
  size: {
    width: 42,
    height: 22,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};

// class implements interface
interface IClock {
  time: Date;
  setTime(date: Date): void;
} 

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// interface for object with large number of dynamic properties
interface Styles {
  [key: string]: string,
};

const css: Styles = {
  border: '1px solid black',
  marginTop: '10px',
  borderRadius: '5px',
};

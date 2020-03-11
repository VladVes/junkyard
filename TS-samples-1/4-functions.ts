function add(a: number, b: number): number {
  return a + b;
}

function toUpper(str: string): string {
  return str.trim().toUpperCase();
}

// overloaded function
interface MyPosition {
  x: number;
  y: number;
}
interface MyPositionWithDef extends Position {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDef;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}
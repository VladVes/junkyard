import "reflect-metadata";

const plane = {
  color: "red",
};

Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("hight", 10, plane);
Reflect.defineMetadata("note", "super color", plane, "color");

const note = Reflect.getMetadata("note", plane);
const hight = Reflect.getMetadata("hight", plane);
const color = Reflect.getMetadata("note", plane, "color");

// console.log(note, hight, color);

@controller
class Plane {
  color: string = "red";

  @get("/login")
  @use(loginMiddleware)
  fly(): void {
    console.log("vrrrrrrr!");
  }
}

function use(middleware: Function) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("middleware", middleware, target, key);
  };
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);
    router.get(path, middleware, target.prototype[key]);
  }
}

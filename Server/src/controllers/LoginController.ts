import { Response, Request, NextFunction } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

@controller("/auth")
class LoginController {
  // if we try to apply decorator @get("/") to a not appropriate method we will faced with ts error!
  // because of we defined RouteHandlerDescriptor in routs.ts and assign it to desc property of decorator, so now it says we can apply
  // route decorators only to a methods witch satisfies express RequestHandler type!

  // @get('/') // this will lead us to an TS error!
  add(a: number, b: number): number {
    return a + b;
  }

  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="post">
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email">
        </div>
        <div>
          <label for="password"ll>Password</label>
          <input type="password" name="password" id="password">
        </div>
        <button type="submit">Submit</button>
      </form>
    `);
  }
  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === "my@my.com" && password === "mypass") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}

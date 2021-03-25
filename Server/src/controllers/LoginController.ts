import { Response, Request } from "express";
import { get, controller } from "./decorators";

@controller("/auth")
class LoginController {
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
}

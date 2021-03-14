import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.send(email + password);
});

export { router };

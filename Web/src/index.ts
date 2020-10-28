import { User } from "./models/User";
import axios from "axios";

// const user = new User({ id: 1 });
const user = User.buildUser({ id: 1 });

console.log(user.get("name"));
user.on("change", () => console.log("changed", user));
user.on("save", () => console.log("saved", user));

user.fetch();

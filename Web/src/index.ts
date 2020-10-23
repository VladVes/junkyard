import { User } from "./models/User";
import axios from "axios";

// const user = new User({ id: 1 });
const user = new User({ name: "Jane", age: 20 });

console.log(user.get("name"));
user.on("change", () => console.log("user has changed!"));
user.trigger("change");

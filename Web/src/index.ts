import { User } from "./models/User";
import axios from "axios";

// const user = new User({ id: 1 });
const user = new User({ name: "Bob", age: 14 });
// user.set({ name: "Ivan", age: 35 });
user.save();

// setTimeout(() => {
//   console.log(user);
// }, 4000);

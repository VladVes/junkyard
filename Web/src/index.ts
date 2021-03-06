import axios, { AxiosResponse } from "axios";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserFrom } from "./views/UserForm";

const user = User.buildUser({ name: "John", age: 54 });
const root = document.getElementById("root");
if (root === null) {
  throw new Error("Root element not found");
}
const userForm = new UserFrom(root, user);
userForm.render();

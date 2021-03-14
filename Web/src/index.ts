import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { Collection } from "./models/Collection";
import { UserList } from "./views/UserList";

const user = User.buildUser({ name: "John", age: 54 });
const root = document.getElementById("root");
if (root === null) {
  throw new Error("Root element not found");
}
const userEdit = new UserEdit(root, user);
userEdit.render();

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);
users.fetch();

users.on("change", () => {
  const listRoot = document.getElementById("root-list");
  if (listRoot) {
    new UserList(listRoot, users).render();
  }
});

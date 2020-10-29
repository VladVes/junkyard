import axios, { AxiosResponse } from "axios";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserFrom } from "./views/UserForm";

const userForm = new UserFrom(document.getElementById("root"));
userForm.render();

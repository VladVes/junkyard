import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const defaultRootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(defaultRootUrl)
    );
  }

  static buildUserCollection(
    rootUrl: string = defaultRootUrl
  ): Collection<User, UserProps> {
    const collection = new Collection<User, UserProps>(rootUrl, this.buildUser);
    return collection;
  }

  isAdminUser(): boolean {
    return this.get("id") === 1;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}

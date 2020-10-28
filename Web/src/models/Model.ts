import axios, { AxiosPromise, AxiosResponse } from "axios";

type Callback = () => void;

interface HasId {
  id?: number;
}

interface ModelAttribute<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(date: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export abstract class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttribute<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // get on() {
  //   return this.events.on;
  // }

  // shorter way to do the same as with getter
  on = this.events.on;

  // get trigger() {
  //   return this.events.trigger;
  // }
  trigger = this.events.trigger;

  // get get() {
  //   return this.attributes.get;
  // }
  get = this.attributes.get;

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.set(response.data);
    });
  }

  save(): void {
    const attributes = this.attributes.getAll();
    this.sync
      .save(attributes)
      .then((response: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => this.trigger("error"));
  }
}

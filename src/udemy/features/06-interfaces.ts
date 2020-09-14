interface Reportable {
  summary(): string; //the same as summary: () => string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const coldDrink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printReport = (item: Reportable): void => {
  console.log(item.summary());
};

printReport(oldCivic);
printReport(coldDrink);

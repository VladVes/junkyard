const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ["brown", true, 40];
// pepsi[0] = 49; // error!

// Another way to make tupel:
type Drink = [string, boolean, number];
const soda: Drink = ["red", false, 20];

const carSpecs: [number, number] = [400, 3354];

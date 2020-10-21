const addNum = (a: number, b: number): number => {
  // always add returning value type
  return a + b;
};

const subtractNum = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // can actually
  // return null;
  // or
  // return undefined;
};

const throwNewError = (message: string): never => {
  // never type says that we never reach the end of this function
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

import { User } from "./User";
import { CustomMap } from "./CustomMap";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

map.addMarker(user);
map.addMarker(company);

import { add, sample as randomSample, pi } from './utils.js';
import User, { userHelper } from './User.js';
//import { userHelper } from './User.js';
import { Person, Color} from './types.js';

const sapmle = 123;

console.log(add(1, 2));
console.log(randomSample([1, 2, 3, 4, 5]));

console.log(pi);

userHelper();


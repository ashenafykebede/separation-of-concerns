/**
 *
 */
import {data} from './data.js';
export const average = (newNumber) => {
    data.numbers.push(newNumber);
    data.average =
    data.numbers.reduce((sum, next) => sum + next, 0) / data.numbers.length;  
};

//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// import { ownKeys } from "core-js/fn/reflect";

export const gigasecond = () => {
 const max = Math.pow(10,9);
  // throw new Error('Remove this statement and implement this function');
  return setInterval(SecondCompteur(),max);
};

function SecondCompteur() {
  return 'ok';
}

console.log(gigasecond());
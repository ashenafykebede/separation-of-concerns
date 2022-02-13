/**
 *
 */
export const replaceWith = (stringToReplace,newChar,oldChar) => {
    let newString = '';
    for (const char of stringToReplace) {
      if (char === oldChar) {
        newString += newChar;
      } else {
        newString += char;
      }
  }
  return newString;
};

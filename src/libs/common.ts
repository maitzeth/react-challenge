import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';


/**
 * This function provides a better way to combine and merge CSS class names
 * Allowing for the use of both regular classnames and Tailwind classnames
 */
export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

/**
 * Calculates the length of a number by converting it to a string
 * and returning the length of that string
 */
export const getNumberLength = (num: number) => {
  return num.toString().length;
};


/**
 * Calculates the width of an input field dynamically based on the number of characters
 */
export const calculateInputWidth = (length: number, prefix = true) => {
  const prefixWidth = 20;
  const numberWidth = 15;

  let totalWidth = 0;

  [...Array(length).keys()].forEach((_) => {
    totalWidth += numberWidth;
  });

  if (prefix) {
    totalWidth += prefixWidth;
  }

  return totalWidth;
}

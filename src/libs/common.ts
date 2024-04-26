import classNames, { type ArgumentArray } from 'classnames';
import { twMerge } from 'tailwind-merge';


/**
 * This function provides a better way to combine and merge CSS class names
 * Allowing for the use of both regular classnames and Tailwind classnames
 */
export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};
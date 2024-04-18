/**
 * The global body object of the document, used for manipulating the DOM's body element.
 * @const {HTMLElement} body - Represents the body element of the HTML document, used for applying dynamic background classes.
 */
const { body } = document;

/**
 * Changes the background class of the body element based on a specified number. If the new background class matches
 * the current one, no change is made, and the function returns false.
 *
 * @param {string} number - The background number to switch to. Expected values are '1', '2', or '3', each corresponding to a specific background class.
 * @returns {boolean|void} - Returns false if the requested background is the same as the current one, preventing unnecessary changes. Otherwise, does not return any value.
 */
function changeBackground(number) {
  /**
   * Stores the previous background class name if it exists, used to check against the new requested background class.
   * @const {string|null} previousBackground - The previously assigned class name of the body, or null if no class has been set.
   */
  let previousBackground;

  if (body.className) {
    previousBackground = body.className;
  }

  //  Reset CSS for body
  body.className = '';

  switch (number) {
    case '1':
      return previousBackground === 'background-1'
        ? false
        : body.classList.add('background-1');
    case '2':
      return previousBackground === 'background-2'
        ? false
        : body.classList.add('background-2');
    case '3':
      return previousBackground === 'background-3'
        ? false
        : body.classList.add('background-3');
    default:
      break;
  }
}

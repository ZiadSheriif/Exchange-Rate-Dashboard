/**
 * formatDate Function
 *
 * This function converts a Date object to a string in the format "YYYY-MM-DD".
 *
 * @function
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date.
 *
 * @example
 * formatDate(new Date());
 */
function formatDate(date) {
    return date.toISOString().slice(0, 10);
  }
  
  export default formatDate;
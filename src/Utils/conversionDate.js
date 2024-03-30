/**
 * Convert a date string to a Date object
 *
 * @param {*} date
 * @returns {Date}
 */
function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

export default formatDate;

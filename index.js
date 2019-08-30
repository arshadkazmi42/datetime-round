const moment = require('moment');

/**
 * 
 * @param {*} date input date to round off the time to
 * @param {*} duration interval to round off the value to fixed time
 * @param {*} method type of round, ciel / floor
 * 
 * Returns moment object
 */
const round = (date, interval, intervalType, method) => {
  if (typeof date === 'string') {
    date = moment(date);
  }
  
  const momentDuration = moment.duration(interval, intervalType);
  return moment(Math[method]((+date) / (+momentDuration)) * (+momentDuration));
};


module.exports = round;

const { expect } = require('chai');
const moment = require('moment');

const DatetimeRound = require('../index');


describe('round off date time to defined interval', () => {
  it('should down round the datetime to fixed interval', () => {
    let M = DatetimeRound(moment('2019-08-30 10:11:00'), 30, 'minutes', 'floor'); 
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('2019-08-30 10:00:00');

    M = DatetimeRound(moment('2019-08-30 10:11:00'), 30, 'minutes', 'ceil'); 
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('2019-08-30 10:30:00');

    M = DatetimeRound('2019-08-30 10:11:00', 30, 'minutes', 'ceil'); 
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('2019-08-30 10:30:00');

    M = DatetimeRound('2019-08-30 10:11:00', 10, 'minutes', 'ceil'); 
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('2019-08-30 10:20:00');

    M = DatetimeRound('2019-08-30 10:11:00', 10, 'minutes', 'floor'); 
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('2019-08-30 10:10:00');
    
    M = DatetimeRound('2019-08-30 10:11:00', '10', 'minutes', 'floor'); 
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('2019-08-30 10:10:00');
  });

  it('should return invalid date errors', () => {
    let M = DatetimeRound('2019-08-30 10:11:00', '', 'minutes', 'floor');
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('Invalid date');

    M = DatetimeRound('2019-08-30 10:11:00', undefined, 'minutes', 'floor');
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('Invalid date');

    M = DatetimeRound('2019-08-30 10:11:00', 'test', 'minutes', 'floor');
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('Invalid date');

    M = DatetimeRound('2019-08-30 10:11:00', null, 'minutes', 'floor');
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('Invalid date');

    M = DatetimeRound('2019-08-30 10:11:00', null, 'mi', 'floor');
    expect(M.format('YYYY-MM-DD HH:mm:ss')).to.equal('Invalid date');

    try {
      M = DatetimeRound('2019-08-30 10:11:00', 'test', 'minutes', '');
    } catch (err) {
      expect(err.message).to.equal('Math[method] is not a function');      
    }
  });
});

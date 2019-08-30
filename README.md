# datetime-round

[![Build Status](https://api.travis-ci.com/arshadkazmi42/datetime-round.svg?branch=master)](https://api.travis-ci.com/arshadkazmi42/datetime-round)

Rounds off datetime to nearest interval

## Install

```
npm i datetime-round
```

## Usage

```javascript

const DatetimeRound = require('datetime-round');


DatetimeRound(moment('2019-08-30 10:11:25'), 30, 'minutes', 'ceil')
  .format('YYYY-MM-DD HH:mm:ss');
// 2019-08-30 10:30:00

DatetimeRound(moment('2019-08-30 10:11:25'), 30, 'minutes', 'floor')
  .format('YYYY-MM-DD HH:mm:ss');
// 2019-08-30 10:00:00

DatetimeRound(moment('2019-08-30 10:11:25'), 10, 'minutes', 'ceil')
  .format('YYYY-MM-DD HH:mm:ss');
// 2019-08-30 10:20:00

DatetimeRound(moment('2019-08-30 10:11:25'), 10, 'minutes', 'floor')
  .format('YYYY-MM-DD HH:mm:ss');
// 2019-08-30 10:10:00

DatetimeRound(moment('2019-08-30 10:11:25'), 5, 'minutes', 'ceil')
  .format('YYYY-MM-DD HH:mm:ss');
// 2019-08-30 10:15:00

DatetimeRound(moment('2019-08-30 10:11:25'), 5, 'minutes', 'floor')
  .format('YYYY-MM-DD HH:mm:ss');
// 2019-08-30 10:10:00

```

## Params

DatetimeRound will accept following parameters as input

- **date**: String datetime / moment object
- **interval**: Time interval till which time needs to be rounded to (integer)
- **intervalType**: Type of interval (`minutes`, `hours`, `seconds`) 
  > Refer to moment.duration docs for all available formats.
- **method**: Rounding method, `floor`, `ceil` .... (It supports all the round methods available in NodeJS `Math` package)

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/datetime-round/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>

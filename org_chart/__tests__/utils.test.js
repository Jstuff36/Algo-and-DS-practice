const fs = require('fs');

const { assertResult, parseInputCSV } = require('../utils');

describe('parseInputCSV', () => {
  const expected = [
    { employee: 'emily@lattice.com', manager: 'jzac@lattice.com' },
    { employee: 'parker@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'grant@lattice.com', manager: 'jzac@lattice.com' },
    { employee: 'ross@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'ryan@lattice.com', manager: 'ming@lattice.com' },
    { employee: 'seth@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'elise@lattice.com', manager: 'jared@lattice.com' },
    { employee: 'byron@lattice.com', manager: 'andrew@lattice.com' },
    { employee: 'joan@lattice.com', manager: 'andrew@lattice.com' },
    { employee: 'joe@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'bill@lattice.com', manager: 'andrew@lattice.com' },
    { employee: 'alysa@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'godefroy@lattice.com', manager: 'grant@lattice.com' },
    { employee: 'katie@lattice.com', manager: 'emily@lattice.com' },
    { employee: 'anthony@lattice.com', manager: 'brian@lattice.com' },
    { employee: 'riki@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'sulagna@lattice.com', manager: 'alex@lattice.com' },
    { employee: 'libby@lattice.com', manager: 'brian@lattice.com' },
    { employee: 'justin@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'alex@lattice.com', manager: 'jzac@lattice.com' },
    { employee: 'jack@lattice.com', manager: '' },
    { employee: 'jamie@lattice.com', manager: 'jzac@lattice.com' },
    { employee: 'jzac@lattice.com', manager: 'jack@lattice.com' },
    { employee: 'elliot@lattice.com', manager: 'jared@lattice.com' },
    { employee: 'caroline@lattice.com', manager: 'grant@lattice.com' },
    { employee: 'patty@lattice.com', manager: 'jzac@lattice.com' },
    { employee: 'ricky@lattice.com', manager: 'andrew@lattice.com' },
    { employee: 'brian@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'hanna@lattice.com', manager: 'grant@lattice.com' },
    { employee: 'adnan@lattice.com', manager: 'andrew@lattice.com' },
    { employee: 'fiona@lattice.com', manager: 'brian@lattice.com' },
    { employee: 'laura@lattice.com', manager: 'grant@lattice.com' },
    { employee: 'val@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'christina@lattice.com', manager: 'grant@lattice.com' },
    { employee: 'haley@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'kevin@lattice.com', manager: 'dini@lattice.com' },
    { employee: 'jared@lattice.com', manager: 'eric@lattice.com' },
    { employee: 'luc@lattice.com', manager: 'jared@lattice.com' },
    { employee: 'madison@lattice.com', manager: 'emily@lattice.com' },
    { employee: 'jo@lattice.com', manager: 'andrew@lattice.com' },
    { employee: 'hanford@lattice.com', manager: 'andrew@lattice.com' },
    { employee: 'ming@lattice.com', manager: 'eric@lattice.com' },
    { employee: 'kyle@lattice.com', manager: 'brian@lattice.com' },
    { employee: 'dini@lattice.com', manager: 'jack@lattice.com' },
    { employee: 'andrew@lattice.com', manager: 'eric@lattice.com' },
    { employee: 'tyler@lattice.com', manager: 'grant@lattice.com' },
    { employee: 'erin@lattice.com', manager: 'alex@lattice.com' },
    { employee: 'nate@lattice.com', manager: 'grant@lattice.com' },
    { employee: 'charlie@lattice.com', manager: 'alex@lattice.com' },
    { employee: 'eric@lattice.com', manager: 'jack@lattice.com' },
    { employee: 'jacob@lattice.com', manager: 'brian@lattice.com' },
  ];

  it('parses the CSV into an array of objects', () => {
    expect(parseInputCSV('unordered_input.csv')).toMatchObject(expected);
  });
});

describe('assertResult', () => {
  describe('when the result is NOT correct', () => {
    const result = fs
      .readFileSync('output.csv', 'utf-8')
      // cut off the last line
      .trim()
      .split('\n')
      .slice(0, -1)
      .join('\n');

    it('returns false', () => expect(assertResult(result)).toEqual(false));
  });

  describe('when the result IS correct', () => {
    const result = fs.readFileSync('output.csv', 'utf-8');
    it('returns true', () => expect(assertResult(result)).toEqual(true));
  });
});

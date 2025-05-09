import sortUsers from "./matchers";

test('1', () => {
    expect(sortUsers([
          {name: 'мечник', health: 10},
          {name: 'маг', health: 100},
          {name: 'лучник', health: 80},
        ]
    )).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ])
})

test('2', () => {
    expect(sortUsers([])).toEqual([])
})
/* eslint-env jest */

const { getStrats } = require('./modules')

describe('getStrats', () => {
  it('should be a function', () => {
    expect(typeof getStrats).toEqual('function')
  })

  it('should return all strats for a map', () => {
    const strats = {
      '!pod': [
        { 'name': 'Pod 1 (3 Mil)', 'queen': 'far', 'mil': 'close', 'flex': 'far', 'objective': 'Mace' },
        { 'name': 'Pod 2 (2 Mil Snail)', 'queen': 'far', 'mil': 'close', 'flex': 'far', 'objective': 'snail' }
      ]
    }

    const actual = getStrats({ content: '!pod' }, strats)
    const expected = `pod
======
Pod 1 (3 Mil); **queen**: far; **mil**: close; **flex**: far; **objective**: Mace
Pod 2 (2 Mil Snail); **queen**: far; **mil**: close; **flex**: far; **objective**: snail`

    expect(actual).toEqual(expected)
  })

  it('should return all map strats for a role', () => {
    const strats = {
      '!pod': [
        { 'name': 'Pod 1 (3 Mil)', 'queen': 'far', 'mil': 'close', 'flex': 'far', 'objective': 'Mace' },
        { 'name': 'Pod 2 (2 Mil Snail)', 'queen': 'far', 'mil': 'close', 'flex': 'far', 'objective': 'snail' }
      ],
      '!split': [
        { 'name': 'Split 1 (3 Mil)', 'queen': 'far', 'mil': 'close', 'flex': 'far', 'objective': 'Mace' },
        { 'name': 'Split 2 (2 Mil Snail)', 'queen': 'far', 'mil': 'close', 'flex': 'far', 'objective': 'snail' }
      ]
    }

    const actual = getStrats({ content: '!queen' }, strats)
    const expected = `
pod
======
Pod 1 (3 Mil); **queen**: far
Pod 2 (2 Mil Snail); **queen**: far

split
======
Split 1 (3 Mil); **queen**: far
Split 2 (2 Mil Snail); **queen**: far`

    expect(actual).toEqual(expected)
  })
})

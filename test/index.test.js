import * as hiragana from '../src'

test('main', () => {
  expect(hiragana.line('a')).toEqual([
    ['あ', 'ア'], ['い', 'イ'], ['う', 'ウ'], ['え', 'エ'], ['お', 'ヲ']
  ])
})

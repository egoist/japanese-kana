import test from 'ava'
import kana from './'

test('main', t => {
	t.is(kana('a', 'hiragana'), 'あいうえお')
	t.is(kana('n', 'katakana'), 'ン')
	t.is(kana('ta', 'all'), 'たちつてとタチツテト')
})

test('data', t => {
	t.is(typeof kana.data(), 'object')
	t.true(Array.isArray(kana.data(true)))
})

test('error', t => {
	t.throws(function () {
		kana('wow')
	}, Error)
})

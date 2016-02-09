import test from 'ava'
import kana from './'

test('main', t => {
	t.is(kana('a', 'hiragana'), 'あいうえお')
	t.is(kana('n', 'katakana'), 'ン')
	t.is(kana('ta', 'all'), 'たちつてとタチツテト')
})

test('error', t => {
	t.throws(function () {
		kana('wow')
	}, Error)
})

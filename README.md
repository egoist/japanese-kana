# japanese-kana [![NPM version](https://img.shields.io/npm/v/japanese-kana.svg)](https://npmjs.com/package/japanese-kana) [![NPM downloads](https://img.shields.io/npm/dm/japanese-kana.svg)](https://npmjs.com/package/japanese-kana) [![Build Status](https://img.shields.io/circleci/project/egoist/japanese-kana/master.svg)](https://circleci.com/gh/egoist/japanese-kana)

> Node interface to get Japanese kana programmatically.

## Install

```
$ npm install --save japanese-kana
```

## Usage

```js
const kana = require('japanese-kana')

kana('a', 'all')
//=> あいうえおアイウエオ

kana('ra', 'katakana')
//=> ラリルレロ

kana('ta', 'hiragana')
//=> たちつてと

kana.data
//=> all kana, see data.json

kana.lines
//=> ['a', 'ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa', 'n']
```

## License

MIT © [EGOIST](https://github.com/egoist)

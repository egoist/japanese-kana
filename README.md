# japanese-kana

[![NPM version](https://img.shields.io/npm/v/japanese-kana.svg?style=flat)](https://npmjs.com/package/japanese-kana) [![NPM downloads](https://img.shields.io/npm/dm/japanese-kana.svg?style=flat)](https://npmjs.com/package/japanese-kana) [![CircleCI](https://circleci.com/gh/egoist/japanese-kana/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/japanese-kana/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add japanese-kana
```

## Usage

```js
const kana = require('japanese-kana')

kana.line('ka')
//=> yield:
[ [ 'か', 'カ' ],
  [ 'き', 'キ' ],
  [ 'く', 'ク' ],
  [ 'け', 'ケ' ],
  [ 'こ', 'コ' ] ]
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### line

Get line by first Romaji of each line

**Parameters**

-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The first Romaji of each line

**Examples**

```javascript
kana.line('ka')
//=> return
[ [ 'か', 'カ' ],
[ 'き', 'キ' ],
[ 'く', 'ク' ],
[ 'け', 'ケ' ],
[ 'こ', 'コ' ] ]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Romaji

### getRomajiByKana

Get Romaji By Kana

**Parameters**

-   `kana` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Kana

**Examples**

```javascript
kana.getRomajiByKana('キ')
//=> return `ki`
```

Returns **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** Romaji

### getKanaByRomaji

Get Kana By Romaji

**Parameters**

-   `romaji` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Romaji

**Examples**

```javascript
kana.getKanaByRomaji('mo')
//=> return ["も", "モ"]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;Hirakana, Katakana>** Kana

### getHiraganaByRomaji

Get Hirakana by Romaji

**Parameters**

-   `romaji` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Romaji

**Examples**

```javascript
kana.getHiraganaByRomaji('fu')
//=> return 'ふ'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Hirakana

### getKatakanaByRomaji

Get Katakana by Romaji

**Parameters**

-   `romaji` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Romaji

**Examples**

```javascript
kana.getKatakanaByRomaji('ha')
//=> return 'ハ'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Katakana

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Author

**japanese-kana** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/japanese-kana/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)

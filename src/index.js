import gujuon from '../data/gujuon.json'

export { gujuon }

/**
 * Get line by first Romaji of each line
 * @param {string} name - The first Romaji of each line
 * @return {Array} Romaji
 * @example
 * kana.line('ka')
 * //=> return
    [ [ 'か', 'カ' ],
      [ 'き', 'キ' ],
      [ 'く', 'ク' ],
      [ 'け', 'ケ' ],
      [ 'こ', 'コ' ] ]
 */
export function line(name) {
  const keys = Object.keys(gujuon)
  const start = keys.indexOf(name)

  let end

  if (name === 'ya') {
    end = start + 3
  } else if (name === 'ra') {
    end = start + 2
  } else if (name === 'n') {
    end = start + 1
  } else {
    end = start + 5
  }

  return keys.slice(start, end).map(n => gujuon[n])
}

/**
 * Get Romaji By Kana
 * @param {string} kana - Kana
 * @return {string|undefined} Romaji
 * @example
 * kana.getRomajiByKana('キ')
 * //=> return `ki`
 */
export function getRomajiByKana(kana) {
  for (const romaji in gujuon) {
    if (gujuon[romaji].indexOf(kana) > -1) {
      return romaji
    }
  }
}

/**
 * Get Kana By Romaji
 * @param {string} romaji - Romaji
 * @return {Array<Hirakana, Katakana>} Kana
 * @example
 * kana.getKanaByRomaji('mo')
 * //=> return ["も", "モ"]
 */
export function getKanaByRomaji(romaji) {
  return gujuon[romaji]
}

/**
 * Get Hirakana by Romaji
 * @param {string} romaji - Romaji
 * @return {string} Hirakana
 * @example
 * kana.getHiraganaByRomaji('fu')
 * //=> return 'ふ'
 */
export function getHiraganaByRomaji(romaji) {
  return getKanaByRomaji(romaji)[0]
}

/**
 * Get Katakana by Romaji
 * @param {string} romaji - Romaji
 * @return {string} Katakana
 * @example
 * kana.getKatakanaByRomaji('ha')
 * //=> return 'ハ'
 */
export function getKatakanaByRomaji(romaji) {
  return getKanaByRomaji(romaji)[1]
}

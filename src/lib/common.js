export function randomKey() {
  let key = ''
  let tmp = ''

  for (let i = 0; i < 20; i++) {
    if (parseInt(Math.random() * 2, 10))
      tmp = String.fromCharCode(parseInt(Math.random() * 26, 10) + 65)
    else
      tmp = String(parseInt(Math.random() * 9, 10))

    key += tmp
  }

  return key
}
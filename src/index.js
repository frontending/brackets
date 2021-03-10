module.exports = function check(str, bracketsConfig) {
  let bracketArr = bracketsConfig.map(function (el) {
    return el.join('')
  })
  let flag = false;
  while (str.length !== 0) {
    if (flag) {
      return false
    }
    flag = true;
    for (let i = 0; i < bracketArr.length; i++) {
      if (str.includes(bracketArr[i])) {
        flag = false
        str = str.replace(bracketArr[i], '')
      }
    }
  }
  return true
}

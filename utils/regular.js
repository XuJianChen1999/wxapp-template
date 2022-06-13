// 验证手机号
export function regMobile(mobile) {
  if (mobile.length < 11 || !mobile) return
  let reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
  
  if (!reg.test(mobile)) return false
}

// 验证身份证号
export function regIDCard(idCard) {
  const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/

  if (!reg.test(idCard)) return false
}

//验证银行卡号
export function regBankCard(bankCard) {
  const reg = /^[1-9]\d{9,29}$/
  if (!reg.test(bankCard)) return false
}

//验证车牌号（新能源+非新能源码）
export function regCarNumber(carNum) {
  const reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/

  if (!reg.test(carNum)) return false
}

//验证邮箱
export function redEmail(email) {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!reg.test(email)) return false
}

// 验证护照
export function regPassPort(passPort) {
  const reg = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/

  if (!reg.test(passPort)) return false
}

// 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export function pwdPower(pwd) {
  const reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
  if (!reg.test(pwd)) return false
}

//不能包含字母
export function regNotIncludeAlphabet(alphabet) {
  const reg = /^[^A-Za-z]*$/
  if (!reg.test(alphabet)) return false
}

// 数字和英文字母组成，并且同时含有数字和英文字母
export function componseNumAndAlp(str) {
  const reg = /^(?=.*[a-zA-Z])(?=.*\d).+$/
  if (!reg.test(str)) return false
}

//验证16进制颜色
export function regColor(color) {
  const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
  if (!reg.test(color)) return false
}

// 是否是小数
export function isDecimal(num) {
  const reg = /^\d+\.\d+$/
  if (!reg.test(num)) return false
}
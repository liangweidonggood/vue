// 验证网址
export function isExternal(path) {
    return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(path);
}
// 验证邮箱
export function isEmail(path) {
    return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(path);
}
// 验证手机
export function isPhone(tel) {
    return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(tel);
}
// 验证身份证号
export function isIdCard(id) {
    return /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(id);
}
// 验证固定电话
export function isTel(tel) {
    return /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(tel);
}
// 验证数字
export function isNum(num) {
    return /^[0-9]*$/.test(num);
}
//# sourceMappingURL=validate.js.map
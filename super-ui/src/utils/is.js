export function is(val, type) {
    return toString.call(val) === `[object ${type}]`;
}
export const isWindow = (val) => {
    return typeof window !== 'undefined' && is(val, 'Window');
};
export function isString(val) {
    return is(val, 'String');
}
export const isDef = (val) => {
    return typeof val !== 'undefined';
};
export const isUnDef = (val) => {
    return !isDef(val);
};
export const isFunction = (val) => typeof val === 'function';
export const isServer = typeof window === 'undefined';
export function isNumber(val) {
    return is(val, 'Number');
}
export const isFirefox = function () {
    return !!window.navigator.userAgent.match(/firefox/i);
};
export const isClient = () => {
    return typeof window !== 'undefined';
};
export const isObject = (val) => {
    return val !== null && is(val, 'Object');
};
export const isElement = (val) => {
    return isObject(val) && !!val.tagName;
};
//# sourceMappingURL=is.js.map
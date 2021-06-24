/**
 * 设置每个页面的title信息
 * @param {String} 单独页面的title
 * @param {String} 总页面的title
 */
export default function getPageTitle(pageTitle, allTitle) {
    if (pageTitle) {
        return `${allTitle} - ${pageTitle}`;
    }
    return `${allTitle}`;
}
//# sourceMappingURL=get-page-title.js.map
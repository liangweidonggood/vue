import { __decorate } from "tslib";
import store from '../index';
import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
let App = class App extends VuexModule {
    constructor() {
        super(...arguments);
        this.collapsed = false; // 菜单栏是否栏缩收
        this.showLogo = true; // 是否显示logo
        this.showTags = true; // 是否显示标签栏
        this.showNavbar = true; // 是否显示navbar
        this.fixedHeader = true; // 是否固定header
        this.layout = 'Classic'; // layout布局
        this.showBreadcrumb = true; // 是否显示面包屑
        this.showHamburger = true; // 是否显示侧边栏缩收按钮
        this.showScreenfull = true; // 是否全屏按钮
        this.showUserInfo = true; // 是否显示用户头像
        this.title = 'vue-element-plus-admin'; // 标题
        this.logoTitle = 'vue-ElPlus-admin'; // logo标题
        this.userInfo = 'userInfo'; // 登录信息存储字段-建议每个项目换一个字段，避免与其他项目冲突
        this.greyMode = false; // 是否开始灰色模式，用于特殊悼念日
        this.showBackTop = true; // 是否显示回到顶部
        this.showMenuTab = false; // 是否固定一级菜单
    }
    SET_COLLAPSED(collapsed) {
        this.collapsed = collapsed;
    }
    SET_SHOWLOGO(showLogo) {
        this.showLogo = showLogo;
    }
    SET_SHOWTAGS(showTags) {
        this.showTags = showTags;
    }
    SET_NAVBAR(showNavbar) {
        this.showNavbar = showNavbar;
    }
    SET_FIXEDHEADER(fixedHeader) {
        this.fixedHeader = fixedHeader;
    }
    SET_LAYOUT(layout) {
        this.layout = layout;
    }
    SET_BREADCRUMB(showBreadcrumb) {
        this.showBreadcrumb = showBreadcrumb;
    }
    SET_HAMBURGER(showHamburger) {
        this.showHamburger = showHamburger;
    }
    SET_SCREENFULL(showScreenfull) {
        this.showScreenfull = showScreenfull;
    }
    SET_USERINFO(showUserInfo) {
        this.showUserInfo = showUserInfo;
    }
    SET_TITLE(title) {
        this.title = title;
    }
    SET_LOGOTITLE(logoTitle) {
        this.logoTitle = logoTitle;
    }
    SET_GREYMODE(greyMode) {
        this.greyMode = greyMode;
    }
    SET_SHOWBACKTOP(showBackTop) {
        this.showBackTop = showBackTop;
    }
    SET_SHOWMENUTAB(showMenuTab) {
        this.showMenuTab = showMenuTab;
    }
    SetCollapsed(collapsed) {
        this.SET_COLLAPSED(collapsed);
    }
    SetShowLogo(showLogo) {
        this.SET_SHOWLOGO(showLogo);
    }
    SetShowTags(showTags) {
        this.SET_SHOWTAGS(showTags);
    }
    SetShowNavbar(showNavbar) {
        this.SET_NAVBAR(showNavbar);
    }
    SetFixedHeader(fixedHeader) {
        this.SET_FIXEDHEADER(fixedHeader);
    }
    SetLayout(layout) {
        this.SET_LAYOUT(layout);
    }
    SetBreadcrumb(showBreadcrumb) {
        this.SET_BREADCRUMB(showBreadcrumb);
    }
    SetHamburger(showHamburger) {
        this.SET_HAMBURGER(showHamburger);
    }
    SetScreenfull(showScreenfull) {
        this.SET_SCREENFULL(showScreenfull);
    }
    SetUserInfo(showUserInfo) {
        this.SET_USERINFO(showUserInfo);
    }
    SetTitle(title) {
        this.SET_TITLE(title);
    }
    SetLogoTitle(logoTitle) {
        this.SET_LOGOTITLE(logoTitle);
    }
    SetGreyMode(greyMode) {
        this.SET_GREYMODE(greyMode);
    }
    SetShowBackTop(showBackTop) {
        this.SET_SHOWBACKTOP(showBackTop);
    }
    SetShowMenuTab(showMenuTab) {
        this.SET_SHOWMENUTAB(showMenuTab);
    }
};
__decorate([
    Mutation
], App.prototype, "SET_COLLAPSED", null);
__decorate([
    Mutation
], App.prototype, "SET_SHOWLOGO", null);
__decorate([
    Mutation
], App.prototype, "SET_SHOWTAGS", null);
__decorate([
    Mutation
], App.prototype, "SET_NAVBAR", null);
__decorate([
    Mutation
], App.prototype, "SET_FIXEDHEADER", null);
__decorate([
    Mutation
], App.prototype, "SET_LAYOUT", null);
__decorate([
    Mutation
], App.prototype, "SET_BREADCRUMB", null);
__decorate([
    Mutation
], App.prototype, "SET_HAMBURGER", null);
__decorate([
    Mutation
], App.prototype, "SET_SCREENFULL", null);
__decorate([
    Mutation
], App.prototype, "SET_USERINFO", null);
__decorate([
    Mutation
], App.prototype, "SET_TITLE", null);
__decorate([
    Mutation
], App.prototype, "SET_LOGOTITLE", null);
__decorate([
    Mutation
], App.prototype, "SET_GREYMODE", null);
__decorate([
    Mutation
], App.prototype, "SET_SHOWBACKTOP", null);
__decorate([
    Mutation
], App.prototype, "SET_SHOWMENUTAB", null);
__decorate([
    Action
], App.prototype, "SetCollapsed", null);
__decorate([
    Action
], App.prototype, "SetShowLogo", null);
__decorate([
    Action
], App.prototype, "SetShowTags", null);
__decorate([
    Action
], App.prototype, "SetShowNavbar", null);
__decorate([
    Action
], App.prototype, "SetFixedHeader", null);
__decorate([
    Action
], App.prototype, "SetLayout", null);
__decorate([
    Action
], App.prototype, "SetBreadcrumb", null);
__decorate([
    Action
], App.prototype, "SetHamburger", null);
__decorate([
    Action
], App.prototype, "SetScreenfull", null);
__decorate([
    Action
], App.prototype, "SetUserInfo", null);
__decorate([
    Action
], App.prototype, "SetTitle", null);
__decorate([
    Action
], App.prototype, "SetLogoTitle", null);
__decorate([
    Action
], App.prototype, "SetGreyMode", null);
__decorate([
    Action
], App.prototype, "SetShowBackTop", null);
__decorate([
    Action
], App.prototype, "SetShowMenuTab", null);
App = __decorate([
    Module({ dynamic: true, namespaced: true, store, name: 'app' })
], App);
export const appStore = getModule(App);
//# sourceMappingURL=app.js.map
import { __decorate } from "tslib";
import store from '../index';
import router from '_@/router';
import { VuexModule, getModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { getRoute } from '_@/router/utils';
export const PAGE_LAYOUT_KEY = '__PAGE_LAYOUT__';
let TagsView = class TagsView extends VuexModule {
    constructor() {
        super(...arguments);
        this.visitedViews = [];
        this.cachedViews = new Map();
    }
    ADD_VISITED_VIEW(view) {
        if (this.visitedViews.some((v) => v.path === view.path))
            return;
        if (view.meta?.noTagsView)
            return;
        this.visitedViews.push(Object.assign({}, view, {
            title: view.meta.title || 'no-name'
        }));
    }
    SET_CACHED_VIEW() {
        const cacheMap = new Map();
        const pageCacheSet = new Set();
        this.visitedViews.forEach((tab) => {
            const item = getRoute(tab);
            const needCache = !item.meta?.noCache;
            if (!needCache)
                return;
            if (item.meta?.affix) {
                const name = item.name;
                pageCacheSet.add(name);
            }
            else if (item.matched && needCache) {
                const matched = item.matched;
                const len = matched.length;
                if (len < 2)
                    return;
                for (let i = 0; i < matched.length; i++) {
                    const key = matched[i].name;
                    if (i < 2) {
                        pageCacheSet.add(key);
                    }
                    if (i < len - 1) {
                        const { meta, name } = matched[i + 1];
                        if (meta && (meta.affix || needCache)) {
                            const mapList = cacheMap.get(key) || [];
                            if (!mapList.includes(name)) {
                                mapList.push(name);
                            }
                            cacheMap.set(key, mapList);
                        }
                    }
                }
            }
        });
        cacheMap.set(PAGE_LAYOUT_KEY, Array.from(pageCacheSet));
        this.cachedViews = cacheMap;
    }
    DEL_VISITED_VIEW(view) {
        for (const [i, v] of this.visitedViews.entries()) {
            if (v.path === view.path) {
                this.visitedViews.splice(i, 1);
                break;
            }
        }
    }
    DEL_CACHED_VIEW() {
        const route = router.currentRoute.value;
        for (const [key, value] of this.cachedViews) {
            const index = value.findIndex((item) => item === route.name);
            if (index === -1) {
                continue;
            }
            if (value.length === 1) {
                this.cachedViews.delete(key);
                continue;
            }
            value.splice(index, 1);
            this.cachedViews.set(key, value);
        }
    }
    DEL_OTHERS_VISITED_VIEWS(view) {
        this.visitedViews = this.visitedViews.filter(v => {
            return v.meta.affix || v.path === view.path;
        });
    }
    DEL_ALL_VISITED_VIEWS() {
        // keep affix tags
        const affixTags = this.visitedViews.filter(tag => tag.meta.affix);
        this.visitedViews = affixTags;
    }
    UPDATE_VISITED_VIEW(view) {
        for (let v of this.visitedViews) {
            if (v.path === view.path) {
                v = Object.assign(v, view);
                break;
            }
        }
    }
    addView(view) {
        this.addVisitedView(view);
        this.addCachedView();
    }
    addVisitedView(view) {
        this.ADD_VISITED_VIEW(view);
    }
    addCachedView() {
        this.SET_CACHED_VIEW();
    }
    delView(view) {
        return new Promise(resolve => {
            this.delVisitedView(view);
            this.SET_CACHED_VIEW();
            resolve({
                visitedViews: [...this.visitedViews],
                cachedViews: [...this.cachedViews]
            });
        });
    }
    delVisitedView(view) {
        return new Promise(resolve => {
            this.DEL_VISITED_VIEW(view);
            resolve([...this.visitedViews]);
        });
    }
    delCachedView() {
        return new Promise(resolve => {
            this.DEL_CACHED_VIEW();
            resolve([...this.cachedViews]);
        });
    }
    delOthersViews(view) {
        return new Promise(resolve => {
            this.delOthersVisitedViews(view);
            this.SET_CACHED_VIEW();
            resolve({
                visitedViews: [...this.visitedViews],
                cachedViews: [...this.cachedViews]
            });
        });
    }
    delOthersVisitedViews(view) {
        return new Promise(resolve => {
            this.DEL_OTHERS_VISITED_VIEWS(view);
            resolve([...this.visitedViews]);
        });
    }
    delOthersCachedViews() {
        return new Promise(resolve => {
            this.SET_CACHED_VIEW();
            resolve([...this.cachedViews]);
        });
    }
    delAllViews() {
        return new Promise(resolve => {
            this.delAllVisitedViews();
            this.SET_CACHED_VIEW();
            resolve({
                visitedViews: [...this.visitedViews],
                cachedViews: [...this.cachedViews]
            });
        });
    }
    delAllVisitedViews() {
        return new Promise(resolve => {
            this.DEL_ALL_VISITED_VIEWS();
            resolve([...this.visitedViews]);
        });
    }
    delAllCachedViews() {
        return new Promise(resolve => {
            this.SET_CACHED_VIEW();
            resolve([...this.cachedViews]);
        });
    }
    updateVisitedView(view) {
        this.UPDATE_VISITED_VIEW(view);
    }
};
__decorate([
    Mutation
], TagsView.prototype, "ADD_VISITED_VIEW", null);
__decorate([
    Mutation
], TagsView.prototype, "SET_CACHED_VIEW", null);
__decorate([
    Mutation
], TagsView.prototype, "DEL_VISITED_VIEW", null);
__decorate([
    Mutation
], TagsView.prototype, "DEL_CACHED_VIEW", null);
__decorate([
    Mutation
], TagsView.prototype, "DEL_OTHERS_VISITED_VIEWS", null);
__decorate([
    Mutation
], TagsView.prototype, "DEL_ALL_VISITED_VIEWS", null);
__decorate([
    Mutation
], TagsView.prototype, "UPDATE_VISITED_VIEW", null);
__decorate([
    Action
], TagsView.prototype, "addView", null);
__decorate([
    Action
], TagsView.prototype, "addVisitedView", null);
__decorate([
    Action
], TagsView.prototype, "addCachedView", null);
__decorate([
    Action
], TagsView.prototype, "delView", null);
__decorate([
    Action
], TagsView.prototype, "delVisitedView", null);
__decorate([
    Action
], TagsView.prototype, "delCachedView", null);
__decorate([
    Action
], TagsView.prototype, "delOthersViews", null);
__decorate([
    Action
], TagsView.prototype, "delOthersVisitedViews", null);
__decorate([
    Action
], TagsView.prototype, "delOthersCachedViews", null);
__decorate([
    Action
], TagsView.prototype, "delAllViews", null);
__decorate([
    Action
], TagsView.prototype, "delAllVisitedViews", null);
__decorate([
    Action
], TagsView.prototype, "delAllCachedViews", null);
__decorate([
    Action
], TagsView.prototype, "updateVisitedView", null);
TagsView = __decorate([
    Module({ dynamic: true, namespaced: true, name: 'tagsView', store })
], TagsView);
export const tagsViewStore = getModule(TagsView);
//# sourceMappingURL=tagsView.js.map
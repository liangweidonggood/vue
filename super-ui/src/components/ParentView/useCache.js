import { computed, ref, unref, getCurrentInstance } from 'vue';
import { tagsViewStore, PAGE_LAYOUT_KEY } from '_@/store/modules/tagsView';
import { useRouter } from 'vue-router';
function tryTsxEmit(fn) {
    const instance = getCurrentInstance();
    instance && fn.call(null, instance);
}
const ParentLayoutName = 'ParentLayout';
export function useCache(isPage) {
    const name = ref('');
    const { currentRoute } = useRouter();
    tryTsxEmit((instance) => {
        const routeName = instance.type.name;
        if (routeName && ![ParentLayoutName].includes(routeName)) {
            name.value = routeName;
        }
        else {
            const matched = currentRoute.value.matched;
            const len = matched.length;
            if (len < 2)
                return;
            name.value = matched[len - 2].name;
        }
    });
    const getCaches = computed(() => {
        const cached = tagsViewStore.cachedViews;
        if (isPage) {
            //  page Layout
            // not parent layout
            return cached.get(PAGE_LAYOUT_KEY) || [];
        }
        const cacheSet = new Set();
        cacheSet.add(unref(name));
        const list = cached.get(unref(name));
        if (!list) {
            return Array.from(cacheSet);
        }
        list.forEach((item) => {
            cacheSet.add(item);
        });
        return Array.from(cacheSet);
    });
    return { getCaches };
}
//# sourceMappingURL=useCache.js.map
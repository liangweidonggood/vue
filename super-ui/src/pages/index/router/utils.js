import ParentLayout from '_c/ParentView/index.vue';
export const getParentLayout = (name) => {
    return () => new Promise((resolve) => {
        resolve({
            ...ParentLayout,
            name
        });
    });
};
export function getRoute(route) {
    if (!route)
        return route;
    const { matched, ...opt } = route;
    return {
        ...opt,
        matched: (matched
            ? matched.map((item) => ({
                meta: item.meta,
                name: item.name,
                path: item.path
            }))
            : undefined)
    };
}
//# sourceMappingURL=utils.js.map
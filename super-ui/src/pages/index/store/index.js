import { createStore } from 'vuex';
const store = createStore({
    modules: {}
});
export function setupStore(app) {
    app.use(store);
}
export default store;
//# sourceMappingURL=index.js.map
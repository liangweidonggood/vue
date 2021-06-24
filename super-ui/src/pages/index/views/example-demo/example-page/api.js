import { fetch } from '_@/axios-config/axios';
export const getExampleListApi = ({ params }) => {
    return fetch({ url: '/example/list', method: 'get', params });
};
export const delsExampApi = ({ data }) => {
    return fetch({ url: '/example/delete', method: 'post', data });
};
export const setExampApi = ({ data }) => {
    return fetch({ url: '/example/save', method: 'post', data });
};
export const getExampDetApi = ({ params }) => {
    return fetch({ url: '/example/detail', method: 'get', params });
};
//# sourceMappingURL=api.js.map
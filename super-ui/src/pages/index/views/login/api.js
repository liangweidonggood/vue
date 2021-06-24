import { fetch } from '_@/axios-config/axios';
export const loginApi = ({ data }) => {
    return fetch({ url: '/user/login', method: 'post', data });
};
export const getRoleDetApi = ({ params }) => {
    return fetch({ url: '/role/detail', method: 'get', params });
};
//# sourceMappingURL=api.js.map
import { fetch } from '_@/axios-config/axios';
export const getRoleListApi = ({ params }) => {
    return fetch({ url: '/role/list', method: 'get', params });
};
export const setRoleApi = ({ data }) => {
    return fetch({ url: '/role/save', method: 'post', data });
};
export const getRoleDetApi = ({ params }) => {
    return fetch({ url: '/role/detail', method: 'get', params });
};
//# sourceMappingURL=api.js.map
import { fetch } from '_@/axios-config/axios';
export const getUserListApi = ({ params }) => {
    return fetch({ url: '/user/list', method: 'get', params });
};
//# sourceMappingURL=api.js.map
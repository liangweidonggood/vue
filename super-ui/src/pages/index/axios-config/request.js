import axios from 'axios';
import { Message } from '_c/Message';
import qs from 'qs';
import config from './config';
const { result_code, base_url } = config;
export const PATH_URL = base_url[process.env.VUE_APP_CURENV];
// 创建axios实例
const service = axios.create({
    baseURL: PATH_URL,
    timeout: config.request_timeout // 请求超时时间
});
// request拦截器
service.interceptors.request.use((config) => {
    if (config.method === 'post' && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});
// response 拦截器
service.interceptors.response.use((response) => {
    if (response.data.code === result_code) {
        return response.data;
    }
    else {
        Message.error(response.data.message);
    }
}, (error) => {
    console.log('err' + error); // for debug
    Message.error(error.message);
    return Promise.reject(error);
});
export default service;
//# sourceMappingURL=request.js.map
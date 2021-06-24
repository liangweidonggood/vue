import axios from 'axios'
import {ElMessage, ElMessageBox, ElNotification} from 'element-plus'
import errorCode from "./errorCode";


// 创建axios实例
const service = axios.create({
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    baseURL: process.env.VUE_APP_BASE_API,// axios中请求配置有baseURL选项，表示请求URL公共部分
    timeout: 10000// 超时
})

// 请求拦截
service.interceptors.request.use(config => {
    // 是否需要设置 token
    config.headers.token = 'token';
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const message = errorCode[code] || res.data.msg || errorCode['default']
    if (code===401){
        ElMessageBox.confirm(
            '登录状态已过期，您可以继续留在该页面，或者重新登录',
            '系统提示',
            {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }
        ).then(() => {
            /*store.dispatch('LogOut').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
            })*/
        })
    }else if (code === 500){
        ElMessage({
            message: message,
            type: 'error'
        })
        return Promise.reject(new Error(message))
    }else if (code !== 200){
        ElNotification.error({
            title: message
        })
        return Promise.reject('error')
    } else {
        return res.data
    }

}, error => {
    console.log('err' + error)
    ElMessage({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})


export default service

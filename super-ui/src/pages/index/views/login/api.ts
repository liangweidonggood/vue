import { fetch } from '_@/axios-config/axios'

interface PropsData {
  params?: any
  data?: any
}

export const captchaApi = () => {
  return fetch({ url: '/captcha/get/img', method: 'post' })
}

export const sysLoginApi = ({ data }: PropsData) => {
  return fetch({ url: '/sysLogin/login', method: 'post', data })
}

export const loginApi = ({ data }: PropsData) => {
  return fetch({ url: '/user/login', method: 'post', data })
}

export const getRoleDetApi = ({ params }: PropsData) => {
  return fetch({ url: '/role/detail', method: 'get', params })
}

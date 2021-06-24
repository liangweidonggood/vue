import { createApp } from 'vue'

import App from '@/App'

import router from '@/router'

import store from '@/store'

import '@/permission'

import '@/assets/icons' // icon
import svgIcon from '@/components/SvgIcon'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import { parseTime, resetForm, addDateRange, selectDictLabel, download, handleTree } from "@/utils/ruoyi"

const app = createApp(App)
app.provide(parseTime, parseTime)
app.provide(resetForm, resetForm)
app.provide(addDateRange, addDateRange)
app.provide(selectDictLabel, selectDictLabel)
app.provide(download, download)
app.provide(handleTree, handleTree)
app.use(store)
app.use(router)
app.use(ElementPlus, {
        size: 'small',
        zIndex: 3000
    })
app .component('svg-icon',svgIcon)
app.mount('#app')

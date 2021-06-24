# super-ui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 插件
```
axios http请求
yarn add axios

clipboard 复制粘贴
yarn add clipboard
yarn add @types/clipboard -D

echarts 图表
yarn add echarts
yarn add @types/echarts -D

element-plus
yarn add element-plus
yarn add vue-cli-plugin-element-plus -D



highlight.js 高亮代码
yarn add highlight.js

intro.js 分步引导
yarn add intro.js
yarn add @types/intro.js -D

js-cookie 2.2.0 
yarn add js-cookie@2.2.0
yarn add @types/js-cookie@^2.2.0 -D

lodash-es 实用工具集
yarn add lodash-es
yarn add @types/lodash-es -D


mitt 通信
yarn add mitt

mockjs 测试
yarn add mockjs
yarn add @types/mockjs -D

normalize.css 是一种CSS reset的替代方案
yarn add normalize.css

nprogress 加载进度条
yarn add nprogress
yarn add @types/nprogress -D

path-to-regexp url正则表达式
yarn add path-to-regexp

qrcode 生成二维码
yarn add qrcode
yarn add @types/qrcode -D

qs 处理url参数
yarn add qs

screenfull 全屏
yarn add screenfull

vditor markdown编辑器
yarn add vditor

wangeditor 富文本编辑器
yarn add wangeditor

web-storage-cache js数据缓存
yarn add web-storage-cache

----------------------------dev---------------------------------------
vuecli4生成
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
@vue/cli-plugin-babel
@vue/cli-plugin-eslint
@vue/cli-plugin-router
@vue/cli-plugin-typescript
@vue/cli-plugin-vuex
@vue/cli-service
@vue/compiler-sfc
@vue/eslint-config-typescript
eslint
eslint-plugin-vue
less
less-loader
typescript





提交规范
yarn add @commitlint/cli -D
yarn add @commitlint/config-conventional -D

文件命名标准
yarn add @ls-lint/ls-lint -D

bable
yarn add babel-eslint -D
yarn add babel-plugin-component -D
yarn add babel-plugin-dynamic-import-node -D
yarn add babel-plugin-import -D

body-parser response body 解析中间件
yarn add body-parser -D

chalk 控制台中字符串的样式
yarn add chalk -D

监控文件系统文件变化
yarn add chokidar -D

compression-webpack-plugin 压缩
yarn add compression-webpack-plugin -D

cross-env  运行跨平台设置和使用环境变量(Node中的环境变量)的脚本
yarn add cross-env -D

统一前端代码风格
yarn add eslint-config-prettier -D
yarn add eslint-plugin-prettier -D
yarn add prettier -D

husky git hook脚本
yarn add husky -D

path 路径模块
yarn add path -D

script-ext-html-webpack-plugin 通过脚本元素的异步和延迟ib属性增强HTML-webpack插件
yarn add script-ext-html-webpack-plugin -D

导入css 预处理器的一些公共的样式文件变量
yarn add style-resources-loader -D

svg icon组件
yarn add svg-sprite-loader --dev

terser-webpack-plugin  使用 terser 来压缩 JavaScript webpack5自带
yarn add terser-webpack-plugin -D

uglifyjs-webpack-plugin 压缩js
yarn add uglifyjs-webpack-plugin -D

vuex-module-decorators 动态vuex
yarn add vuex-module-decorators -D

```
# 问题
```
问题
this.getoptions is not a function

原因 less版本过高

方案
yarn remove less-loader
yarn remove less
yarn add less@^3.0.4 -D
yarn add less-loader@^5.0.0 -D

问题
Parameter 'v' implicitly has an 'any' type.
The operand of a 'delete' operator must be optional.
原因

解决
tsconfig.json添加"noImplicitAny": false,
yarn remove typescript
yarn add typescript@~3.9.3 -D
"@typescript-eslint/eslint-plugin": "^4.18.0", "@typescript-eslint/eslint-plugin": "^4.5.0",
"@typescript-eslint/parser": "^4.18.0", "@typescript-eslint/parser": "^4.5.0",
"@vue/eslint-config-typescript": "^7.0.0", "@vue/eslint-config-typescript": "^5.0.2",
yarn remove @typescript-eslint/eslint-plugin
yarn remove @typescript-eslint/parser
yarn remove @vue/eslint-config-typescript
yarn add @typescript-eslint/eslint-plugin@^4.5.0 -D
yarn add @typescript-eslint/parser@^4.5.0 -D
yarn add @vue/eslint-config-typescript@^5.0.2 -D
```

部署说明：

1:下载安装windows版FFMPEG

- https://blog.51cto.com/helloway/1642247

环境变量不配也行

2:下载安装window版nginx（发的代码也有）

- 启动nginx

3：数据库配置

- renren_fast执行renren_fast.sql

4:IDE导入renren_fast项目

配置ffmpeg路径和nginx的html目录

- application-dev.yml：

  ```yml
  rtsp:
      hlsPath:  D:/nginx-1.16.1/html/hls/
      ffmpegPath: D:/BaiduNetdiskDownload/ffmpeg-20200528-c0f01ea-win64-static/bin/
  ```

- 启动renren_fast项目（springboot启动）

5:启动前端项目

- 安装nodejs https://www.runoob.com/nodejs/nodejs-install-setup.html

- cmd到目录执行npm install
- 完成后执行npm run dev
<template>
  <el-dialog
      :close-on-click-modal="false"
    :visible.sync="visible">
           <video
              id="myVideo"
              class="video-js vjs-big-play-centered vjs-fluid"
              controls
              poster="~@/assets/img/poster.png"
              preload="auto"
              width="1600px"
              height="900px"
            >
            <source
                type="application/x-mpegURL"
                :src="videoUrl"
            >
      </video>

    <span slot="footer" class="dialog-footer">
      <el-button @click="close">关闭</el-button>
    </span>
  </el-dialog>
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        videoUrl:'',
        player:null
      }
    },
    methods: {
      init(id) {
       //此处初始化的调用，我放在了获取数据之后的方法内，而不是放在钩子函数mounted
        //页面dom元素渲染完毕，执行回调里面的方法
        this.videoUrl='http://localhost/hls/'+id+'.m3u8'
        this.visible=true
        var that =this;
         this.$nextTick(() => {
                 if(that.player==null){
                  that.player = this.$video(document.getElementById('myVideo'), {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: false,
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    controlBar:{
                      playToggle:true
                    }
                  });
                }
                })
        if(that.player!=null){
                 that.player.src(that.videoUrl)
             }

    },
    close(){
    this.visible=false;
    }
  }
  }
</script>

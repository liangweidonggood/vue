<template>
  <div class="mod-home">
    <h3>视频监控</h3>
    <el-container>
      <el-header>   <div>
                        <el-button type="primary"
                                         v-for="(item, index) in dataList"
                                         :key="index"
                                         @click="show(item.id)"
                                         >
                                         {{item.name}}
                                       </el-button>
                                       </div></el-header>
      <el-main>    <div  style="border-radius: 2px;
                                                       border: 2px solid;
                                                       height: 600px;">
                             <video
                                id="myVideo"
                                class="video-js vjs-big-play-centered vjs-fluid"
                                controls
                                poster="~@/assets/img/poster.png"
                                preload="auto"
                                width="100%"
                                height="100%"
                              >
                              <source
                                  type="application/x-mpegURL"
                                  :src="videoUrl"
                              >
                        </video>
               </div></el-main>
    </el-container>


  </div>
</template>

<script>
 export default {
    data () {
      return {
        dataList: [],
        visible: false,
        videoUrl:'',
        player:null
      }
    },
        activated () {
         this.getDataList()
        },
    methods: {
          getDataList () {
            this.dataListLoading = true
            this.$http({
              url: this.$http.adornUrl('/equipment/equipment/list'),
              method: 'get',
              params: this.$http.adornParams({
                'page': 1,
                'limit': 1000
              })
            }).then(({data}) => {
              if (data && data.code === 0) {
                this.dataList = data.page.list
              } else {
                this.dataList = []
              }
            })
          },
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
    show (id) {
                    this.$http({
                             url: this.$http.adornUrl(`/equipment/equipment/info/${id}`),
                             method: 'get',
                             params: this.$http.adornParams()
                           }).then(({data}) => {
                             if (data && data.code === 0) {
                             if(data.equipment.status=='拉流成功'){
                               this.viewVisible = true
                                    this.$nextTick(() => {
                                      this.init(id)
                                    })
                                      }
                       else{
                             this.$message({
                                       message: '拉流中，等待几秒刷新',
                                       type: 'fail',
                                       duration: 1500,
                                       onClose: () => {
                                         this.getDataList()
                                       }
                                     })
                       }
                              }
                            })
    },
    close(){
    this.visible=false;
    }
  }
  }
</script>

<style>
  .mod-home {
    line-height: 1.5;
  }
</style>


<template>
  <div>
    <div>
      <canvas id="canvas" width="100%" height="100%"></canvas>
    </div>
    <div class="login">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
        <h3 class="title">后台管理系统</h3>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
            <template #prefix>
              <svg-icon  icon-class="user" class="el-input__icon input-icon" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="loginForm.password"
              type="password"
              auto-complete="off"
              placeholder="密码"
              @keyup.enter="handleLogin"
          >
            <template #prefix>
              <svg-icon icon-class="password" class="el-input__icon input-icon" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
              v-model="loginForm.code"
              auto-complete="off"
              placeholder="验证码"
              style="width: 63%"
              @keyup.enter="handleLogin"
          >
            <template #prefix>
              <svg-icon icon-class="validCode" class="el-input__icon input-icon" />
            </template>

          </el-input>
          <div class="login-code">
            <img :src="codeUrl" @click="getCode" />
          </div>
        </el-form-item>
        <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <el-button
              :loading="loading"
              size="medium"
              type="primary"
              style="width:100%;"
              @click.prevent="handleLogin"
          >
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>

<script>

import {getCodeImg} from "@/apis/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from '@/utils/jsencrypt'

export default {
  name: "login",
  data() {
    return {
      codeUrl: "",
      cookiePassword: "",
      loginForm: {
        username: "demo",
        password: "123456",
        rememberMe: false,
        code: "",
        uuid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "用户名不能为空" }
        ],
        password: [
          { required: true, trigger: "blur", message: "密码不能为空" }
        ],
        code: [{ required: true, trigger: "change", message: "验证码不能为空" }]
      },
      loading: false,
      redirect: undefined
    };
  },
  methods: {
    canvas() {
      let _this = this;
      // 定义窗口大小变更通知事件
      window.onresize = function () {
        // 窗口高度
        _this.screenHeight = document.documentElement.clientHeight;
      };
      let canvas = document.getElementById('canvas');
      let ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;
      let hue = 217;
      let stars = [];
      let count = 0;
      let maxStars = 1300; // 星星数量
      let canvas2 = document.createElement('canvas');
      let ctx2 = canvas2.getContext('2d');
      canvas2.width = 100;
      canvas2.height = 100;
      let half = canvas2.width / 2;
      let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
      gradient2.addColorStop(0.025, '#CCC');
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
      gradient2.addColorStop(1, 'transparent');
      ctx2.fillStyle = gradient2;
      ctx2.beginPath();
      ctx2.arc(half, half, half, 0, Math.PI * 2);
      ctx2.fill();

      // End cache
      function random(min, max) {
        if (arguments.length < 2) {
          max = min;
          min = 0;
        }
        if (min > max) {
          let hold = max;
          max = min;
          min = hold;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function maxOrbit(x, y) {
        let max = Math.max(x, y);
        let diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        // 星星移动范围，值越大范围越小，
      }

      let Star = function () {
        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 8;
        // 星星大小
        this.orbitX = w / 2;
        this.orbitY = h / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 50000;
        // 星星移动速度
        this.alpha = random(2, 10) / 10;
        count++;
        stars[count] = this;
      };
      Star.prototype.draw = function () {
        let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
        let y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
        let twinkle = random(10);
        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
      };
      for (let i = 0; i < maxStars; i++) {
        /* eslint-disable no-new */
        new Star();
      }

      function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5; // 尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'lighter';
        for (let i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
        }
        window.requestAnimationFrame(animation);
      }

      animation();
    },
    getCode(){
      getCodeImg().then(res=>{
        console.log(res)
        this.codeUrl = res.data.base64stringC;
        this.loginForm.uuid = res.data.idKeyC;
      })
    },
    getCookie() {
      const username = Cookies.get("username");
      const password = Cookies.get("password");
      const rememberMe = Cookies.get('rememberMe')
      this.loginForm = {
        username: username === undefined ? this.loginForm.username : username,
        password: password === undefined ? this.loginForm.password : decrypt(password),
        rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
      };
    },
    handleLogin() {
      console.log('handleLogin')
      this.$refs.loginForm.validate(valid => {
        console.log(valid)
        if (valid) {
          this.loading = true
          if (this.loginForm.rememberMe) {
            Cookies.set("username", this.loginForm.username, { expires: 30 });
            Cookies.set("password", encrypt(this.loginForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.loginForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove("username");
            Cookies.remove("password");
            Cookies.remove('rememberMe');
          }
          this.$store
              .dispatch("Login", this.loginForm)
              .then(() => {
                console.log('login')
                this.$router.push({ path: this.redirect || "/" });
              })
              .catch(() => {
                this.loading = false;
                this.getCode();
              })
        }
      })
    },
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {
    this.getCode()
    this.getCookie()
  },
  mounted() {
    this.canvas()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
#canvas {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.login {
  position: absolute;
  top:50%; left:50%;
  margin-top:-500px;
  margin-left:-250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 400px;
  padding: 25px 25px 5px 25px;

  .el-input {
    height: 38px;

    input {
      height: 38px;
    }
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;

  img {
    cursor: pointer;
    vertical-align: middle;
    width: 120px;
  }
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>

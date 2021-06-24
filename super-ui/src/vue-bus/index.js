// 通过mitt实现vue-bus通信
import mitt from 'mitt';
const bus = {};
const emitter = mitt();
bus.$on = emitter.on;
bus.$off = emitter.off;
bus.$emit = emitter.emit;
export default bus;
//# sourceMappingURL=index.js.map
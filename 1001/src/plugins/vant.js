// 按需全局引入 vant组件
import { Toast, Overlay, Loading } from "vant";

export default {
  install: (app, options) => {
    app.use(Toast);
    app.use(Overlay);
    app.use(Loading);
  },
};

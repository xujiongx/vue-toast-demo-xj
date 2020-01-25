import ToastComponents from './vue-toast.vue'

let Toast = {}
//Vue.use()需要一个install方法
Toast.install = function (Vue, options) {

    var opt = {
        duration: 3000
    }

    for (var key in options) {
        opt[key] = options[key];
    }

    Vue.prototype.$toast = function (message, option) {
        if (typeof option == 'object') {
            for (var key in option) {
                opt[key] = option[key];
            }
        }

        //toast页面也是一个组件对象，通过extends变成对象
        const ToastController = Vue.extend(ToastComponents)
        // 将对象挂载到instace上
        var instance = new ToastController().$mount(document.createElement('div'))
        //设置toast上的message和visible
        instance.message = message;
        instance.visible = true;
        //将instace加到body上
        document.body.appendChild(instance.$el)
        // 定时删除
        setTimeout(() => {
            instance.visible = false;
            document.body.removeChild(instance.$el);
        }, opt.duration)
    }

    //Vue原型上定义方法
    Vue.prototype.$toast['show'] = function (message, option) {
        Vue.prototype.$toast(message, option);
    }
    Vue.prototype.$toast['success'] = function (message, option) {
        Vue.prototype.$toast(message, option);
    }
    Vue.prototype.$toast['info'] = function (message, option) {
        Vue.prototype.$toast(message, option);
    }
}


//如果页面上有VUe对象，就挂载Toast组件
if (window.Vue) {
    Vue.use(Toast)
}
export default Toast;
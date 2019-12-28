//app.js
const context = require('./context/Java110Context.js');



const loginFactory = context.factory.login;
const userFactory = context.factory.user;


App({
    // 小程序启动生命周期
    onLaunch: function () {

        let that = this;
        // 检查登录状态
        loginFactory.checkLoginStatus();

        // 获取用户地理位置
        userFactory.getUserLocation();
    },
    // app全局数据
    globalData: {
        userInfo: null
    }
});
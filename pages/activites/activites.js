// pages/activites/activites.js
const context = require("../../context/Java110Context.js");
const constant = context.constant;
const util = context.util;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _that = this;
    context.getOwner(function (_owner) {
      let _communityId = '';
      if (_owner == null) {
        _communityId = '7020181217000001'
      } else {
        _communityId = _owner.communityId;
      }
      _that.setData({
        communityId: _communityId
      });

      //查询小区文化
      _that._loadActivites();


    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 加载活动
   * 第一次加载是可能没有小区 则直接下载固定小区
   * 
   */
  _loadActivites: function () {
    let _that = this;
    let _objData = {
      page: 1,
      row: 15,
      communityId: this.data.communityId
    };
    context.request({
      url: constant.url.listActivitiess,
      header: context.getHeaders(),
      method: "GET",
      data: _objData, //动态数据
      success: function (res) {
        console.log("请求返回信息：", res);
        if (res.statusCode == 200) {

          let _activites = res.data.activitiess;
          let _acts = [];
          _activites.forEach(function (_item) {
            _item.src = constant.url.filePath + "?fileId=" + _item.headerImg + "&communityId=" + _that.data.communityId + "&time=" + new Date();
            let _startTime = _item.startTime.replace(/\-/g, "/")
            let _tmpStartTime = new Date(_startTime);

            _item.startTime = util.date.formatDate(_tmpStartTime);
            _acts.push(_item);
          });


          _that.setData({
            activities: _acts
          });

          return;
        }
        wx.showToast({
          title: "服务器异常了",
          icon: 'none',
          duration: 2000
        })
      },
      fail: function (e) {
        wx.showToast({
          title: "服务器异常了",
          icon: 'none',
          duration: 2000
        })
      }
    });
  },
})
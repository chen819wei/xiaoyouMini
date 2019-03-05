// pages/require/require.js
import {
  ListModel
} from '../../models/listModel.js'

var listModel = new ListModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   listModel.getSelect().then((res) => {
      console.log(res[0]);
      this.setData({
        listData:res
      })
    
     console.log(this.data.listData[0]);

    })
   
    //promise第一步new出来
    //第二步 异步代码写在promise的函数中
    // const promise = new Promise((resolve, reject) => {
    //   wx.getSystemInfo({
    //     success: (res) => {
    //       resolve(res);
    //     },
    //     fail: (err) => {
    //       reject(err);
    //     }
    //   })

    // })
    //peomise第三步
    // promise.then((res) => {
    //   console.log(res);
    // }, (err) => {
    //   console.log(err);
    // })


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

  }
})
// pages/detail/detail.js
import {
  ListModel
} from '../../models/listModel.js'

var listModel = new ListModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:null
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //id
    const id = options.product_release_id;
    console.log(id);
  
    const detail=listModel.getDetail(id);
    detail.then(res=>{
      this.setData({
        product:res
      })
    })
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
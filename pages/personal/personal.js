// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: true,
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  hasGottenUserInfo: function() {
    wx.getSetting({
      success: (data) => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (data) => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          this.setData({
            hasUserInfo: false
          })
        }
      }
    })
  },

  onGetUserInfo: function(event) {
    let userInfo = event.detail.userInfo
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
    }
  },
  onJumpToRelease: function(event) {
    wx.navigateTo({
      url: '/pages/release/release',
    })
  },
  myCollect:function(event){
    wx.navigateTo({
      url: '/pages/myCollect/myCollect?id=1',
    })
  },
  myUsed:function(event){
    wx.navigateTo({
      url: '/pages/myCollect/myCollect?id=2',
    })
  },
  myRequire:function(event){
    wx.navigateTo({
      url: '/pages/myCollect/myCollect?id=3',
    })
  },
  about:function(event){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  feedback:function(event){
    wx.navigateTo({
      url: '/pages/release/release',
    })
  },
  engineer:function(event){
    wx.navigateTo({
      url: '/pages/release/release',
    })
  },
  setting:function(event){
    wx.navigateTo({
      url: '/pages/setting/setting',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.hasGottenUserInfo()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})